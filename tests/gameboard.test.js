import Gameboard from '../src/modules/data/gameboard';
import ShipFactory from '../src/modules/data/ship';

test('returns false if board position is invalid', ()=>{
 const carrier = ShipFactory(5,'c');
 const game = Gameboard();
 expect(game.validatePlacement(carrier, 0, 0, 'd')).toBe(true);
});