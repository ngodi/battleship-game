import ShipFactory from './ship';
import ui from '../ui';

const Gameboard = () => {

const findEdge = (position) => {
    const edges = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
    for(let i = 0;i<edges.length;i++) {
        if(edges[i] >= position){
            return edges[i];
            }
        }
     };
const validatePlacement = (ship, position, board, direction) => {
    const len = ship.len;
    const edge = findEdge(position);
    if(direction == 'down'){
          let k = 0;
         for(let i = 0; i < len; i++){
            if(board[position + k] !== null){
                return false;
            }
            k += 10;
       }
    }else if(direction == 'right'){
        for(let i = 0; i < len; i++){
            if(board[position + i] !== null){
                return false;
            }
       }
       if((position + (len-1)) > edge){
           return false
       }
    }
   return true;
};
const charToShip = {
    'c':'carrier', 'b': 'battleship', 'cr':'cruiser', 's':'submarine', 'd':'destroyer'
    };
const shipName = ship => {
   return charToShip[ship.cha];
} 
 
let placedShips = [];
const placeShip = (ship, position, board, dir) => {
let result = validatePlacement(ship, position, board, dir);

if(result && placedShips.includes(ship)){
    ui.showMessage('ship placed already');
}else if(result && !placedShips.includes(ship)){
    const len = ship.len;
    const cha = ship.cha;
        let i = 0;
        let k = 0;
    while(i < len){
        if(dir == 'down'){
          board[position + k] = `${i}-${cha}`;
          i++;
          k+=10;
      }else if(dir == 'right'){
        board[position + i] = `${i}-${cha}`;
        i++;
     }
  }
  placedShips.push(ship);
}

};
const carrier = ShipFactory(5, 'c');
const battleship = ShipFactory(4, 'b');
const cruiser = ShipFactory(3,'cr');
const submarine = ShipFactory(3,'s');
const destroyer = ShipFactory(2,'d');

let ships =  [ carrier, battleship, cruiser, submarine, destroyer];
const receiveAttack = (position, board) => {
  ships = [ carrier, battleship, cruiser, submarine, destroyer];
  if(board[position] === null){
    board[position] += 'O';
    ui.showMessage('missed shot');
  }else if(/X/.test(board[position])){
      ui.showMessage('hit already');
  }else{
   let ship =  ships.filter(hitship => board[position].split('-')[1] == hitship.cha);
   let index = board[position].split('-')[0];
   board[position] += 'X';
   ship[0].hit(index);
}
};

const allSunk = () => {
return  ships.every(ship => ship.isSunk());
};



return { validatePlacement, placeShip, receiveAttack, allSunk, ships, shipName, placedShips };
};
export default Gameboard