/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import ShipFactory from '../src/modules/data/ship';

test('size of Carrier is 5', () => {
  const carrier = ShipFactory(5, 'c');
  expect(carrier.len).toBe(5);
});

test('returns true if ship is sunk', () => {
  const carrier = ShipFactory(5, 'c');
  for (let i = 0; i < carrier.len; i++) {
    carrier.hit(i);
  }
  expect(carrier.isSunk()).toBe(true);
});

test('sets "X" to ship hitPos index if hit', () => {
  const carrier = ShipFactory(5, 'c');
  carrier.hit(2);
  expect(carrier.hitPos[2]).toBe('X');
});
