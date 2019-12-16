/* eslint-disable no-undef */
import Gameboard from '../src/modules/data/gameboard';
import Player from '../src/modules/data/players';

test('receives attack and sets data index to X if hit or O if missed', () => {
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();
  const { ships } = playerBoard;
  playerBoard.placeShip(ships[1], 10, playerBoard.data, 'right');
  const computer = Player('computer', computerBoard, computerBoard.data);
  computer.attack(playerBoard, 12, playerBoard.data);
  computer.attack(playerBoard, 15, playerBoard.data);
  expect(playerBoard.data[12]).toMatch(/X/);
  expect(playerBoard.data[15]).toBe('O');
});
