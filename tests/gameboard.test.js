/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import Gameboard from '../src/modules/data/gameboard';

test('returns false if board position is invalid', () => {
  const playerBoard = Gameboard();
  playerBoard.placeShip(playerBoard.ships[0], 0, playerBoard.data, 'down');
  expect(playerBoard.data[0]).not.toBe(null);
});

test('returns false if NOT all ships are sunk', () => {
  const playerBoard = Gameboard();
  const { ships } = playerBoard;
  for (let i = 0; i < ships[2].len; i++) {
    ships[2].hit(i);
  }
  expect(playerBoard.allSunk()).toBe(false);
});
