import ShipFactory from '../src/modules/data/ship';

test('size of Carrier is 5', () => {
const carrier = ShipFactory(5,'c');
expect(carrier.len).toBe(5);
});