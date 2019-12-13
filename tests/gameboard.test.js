/* eslint-disable no-undef */
import Gameboard from '../src/modules/data/gameboard';
import ShipFactory from '../src/modules/data/ship';

test('returns false if board position is invalid', () => {
  const carrier = ShipFactory(5, 'c');
  const playerStorage = new Array(100).fill(null);
  const playerBoard = Gameboard();
  playerBoard.placeShip(carrier, 0, playerStorage, 'down');
  expect(playerStorage[0]).not.toBe(null);
});
