import { board, validatePlacement, placeShip} from '../src/modules/data/gameboard';
import ShipFactory from '../src/modules/data/ship';

test('returns false if board position is invalid', ()=>{
 const carrier = ShipFactory(5,'c');
 expect(validatePlacement(carrier, 0, 0, 'd')).toBe(true);
});