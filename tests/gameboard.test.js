/* eslint-disable arrow-parens */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import Gameboard from '../src/modules/data/gameboard';

test('returns false if ship placement on gameboard is invalid', () => {
  const playerBoard = Gameboard();
  const result = playerBoard.validatePlacement(playerBoard.ships[0], 9, playerBoard.data, 'right');
  expect(result).toBe(false);
});

test('returns true if ship placement on gameboard is valid', () => {
  const playerBoard = Gameboard();
  const result = playerBoard.validatePlacement(playerBoard.ships[4], 80, playerBoard.data, 'right');
  expect(result).toBe(true);
});

test('returns false if NOT all ships are sunk', () => {
  const playerBoard = Gameboard();
  const { ships } = playerBoard;
  for (let i = 0; i < ships[2].len; i++) {
    ships[2].hit(i);
  }
  expect(playerBoard.allSunk()).toBe(false);
});

test('returns TRUE if ALL ships are sunk', () => {
  const playerBoard = Gameboard();
  const { ships } = playerBoard;
  ships.forEach(ship => {
    for (let i = 0; i < ship.len; i++) {
      ship.hit(i);
    }
  });
  expect(playerBoard.allSunk()).toBe(true);
});

test('displays no error if placement is successful and displays error message if placement is invalid or repeated', () => {
  const playerBoard = Gameboard();
  const { ships } = playerBoard;
  const result1 = playerBoard.placeShip(ships[1], 10, playerBoard.data, 'right');
  const result2 = playerBoard.placeShip(ships[1], 10, playerBoard.data, 'right');
  const result3 = playerBoard.placeShip(ships[2], 10, playerBoard.data, 'right');
  expect(result1).toBe('');
  expect(result2).toBe('ship placed already');
  expect(result3).toBe('Invalid position');
});

test('Modifies gameboard data after placing ship', () => {
  const playerBoard = Gameboard();
  const { ships } = playerBoard;
  playerBoard.placeShip(ships[1], 10, playerBoard.data, 'right');
  for (let i = 0; i < ships[1].len; i++) {
    expect(playerBoard.data[10 + i]).toBe(`${i}-${ships[1].cha}`);
  }
});
