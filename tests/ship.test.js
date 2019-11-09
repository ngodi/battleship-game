import ShipFactory from '../src/modules/data/ship';

test('ship length', () => {
    const carrier = ShipFactory(5);
    const battleship = ShipFactory(4);
    const cruiser = ShipFactory(3);
    const submarine = ShipFactory(3);
    const destroyer = ShipFactory(2);
      expect(carrier.len).toBe(5);
   
  });

  test('ship is not sunk', () => {
    const carrier = ShipFactory(5);
    const battleship = ShipFactory(4);
    const cruiser = ShipFactory(3);
    const submarine = ShipFactory(3);
    const destroyer = ShipFactory(2);
      expect(carrier.isSunk()).toBe(false);
   
  });