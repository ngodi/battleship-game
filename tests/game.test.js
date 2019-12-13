/* eslint-disable no-undef */
import Player from '../src/modules/data/players';
import Gameboard from '../src/modules/data/gameboard';

test('receives attack and updates target position', () => {
  const playerStorage = new Array(100).fill(null);
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();
  const player = Player('player', playerBoard, playerStorage);
  player.attack(computerBoard, 0, computerStorage);
  expect(computerStorage[0]).not.toBe(null);
});
