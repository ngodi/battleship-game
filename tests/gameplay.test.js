/* eslint-disable no-undef */
import Gameboard from '../src/modules/data/gameboard';
import Player from '../src/modules/data/players';

test('receives attack and updates target position', () => {
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();
  const player = Player('player', playerBoard, playerBoard.data);
  player.attack(computerBoard, 0, computerBoard.data);
  expect(computerBoard.data[0]).not.toBe(null);
});
