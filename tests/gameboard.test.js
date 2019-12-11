import Gameboard from '../src/modules/data/gameboard';
import ShipFactory from '../src/modules/data/ship';

test('returns false if board position is invalid', ()=>{
 const carrier = ShipFactory(5,'c');
 const playerStorage = new Array(100).fill(null);
 const playerBoard = Gameboard();
 expect(playerBoard.validatePlacement(carrier, 0, playerStorage, 'down')).toBe(true);
});