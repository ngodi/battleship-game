/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-parens */
/* eslint-disable consistent-return */
import ShipFactory from './ship';

const Gameboard = () => {
  const charToShip = {
    c: 'carrier', b: 'battleship', cr: 'cruiser', s: 'submarine', d: 'destroyer',
  };
  const shipName = ship => charToShip[ship.cha];

  const placedShips = [];
  const carrier = ShipFactory(5, 'c');
  const battleship = ShipFactory(4, 'b');
  const cruiser = ShipFactory(3, 'cr');
  const submarine = ShipFactory(3, 's');
  const destroyer = ShipFactory(2, 'd');

  let ships = [carrier, battleship, cruiser, submarine, destroyer];

  const findEdge = (position) => {
    const edges = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
    for (let i = 0; i < edges.length; i += 1) {
      if (edges[i] >= position) {
        return edges[i];
      }
    }
  };
  const data = new Array(100).fill(null);

  const validatePlacement = (ship, position, board, direction) => {
    const { len } = ship;
    const edge = findEdge(position);
    if (direction === 'down') {
      let k = 0;
      for (let i = 0; i < len; i += 1) {
        if (board[position + k] !== null) {
          return false;
        }
        k += 10;
      }
    } else if (direction === 'right') {
      for (let i = 0; i < len; i += 1) {
        if (board[position + i] !== null) {
          return false;
        }
      }
      if ((position + (len - 1)) > edge) {
        return false;
      }
    }
    return true;
  };

  const placeShip = (ship, position, board, dir) => {
    const result = validatePlacement(ship, position, board, dir);
    let message = '';
    if (placedShips.includes(ship)) {
      message = 'ship placed already';
    } else if (result === true && !placedShips.includes(ship)) {
      const { len, cha } = ship;
      let i = 0;
      let k = 0;
      while (i < len) {
        if (dir === 'down') {
          board[position + k] = `${i}-${cha}`;
          i++;
          k += 10;
        } else if (dir === 'right') {
          board[position + i] = `${i}-${cha}`;
          i++;
        }
      }
      placedShips.push(ship);
    } else if (result === false) {
      message = ('Invalid position');
    }
    return message;
  };

  const receiveAttack = (position, board) => {
    let hit = '';
    ships = [carrier, battleship, cruiser, submarine, destroyer];
    if (board[position] === null) {
      board[position] = 'O';
      hit = true;
    } else if (board[position] === 'O') {
      hit = false;
    } else if (/X/.test(board[position])) {
      hit = false;
    } else {
      const ship = ships.filter(hitship => board[position].split('-')[1] === hitship.cha);
      const index = board[position].split('-')[0];
      board[position] += 'X';
      ship[0].hit(index);
      hit = true;
    }
    return hit;
  };

  const allSunk = () => ships.every(ship => ship.isSunk());


  return {
    validatePlacement, placeShip, receiveAttack, allSunk, ships, shipName, placedShips, data,
  };
};
export default Gameboard;
