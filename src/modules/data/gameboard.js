import ShipFactory from './ship';
import Game from '../game';

const Gameboard = (() => {

const validatePlacement = (ship, position, board, direction) => {
    const len = ship.len;
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
    }
   return true;
};

const placeShip = (ship, position, board, dir) => {
let result = validatePlacement(ship, position, board, dir);
if(result){
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
}else{
    console.log('invalid ship placement');//modify to DOM message
}

};
const receiveAttack = (position, board) => {
  const ships = [ Game.carrier, Game.battleship, Game.cruiser, Game.submarine, Game.destroyer];
  if(board[position] === null){
    board[position] += 'O';
    console.log('missed shot');
  }else if(/X/.test(board[position])){
      console.log('hit already');
  }else{
   let ship =  ships.filter(hitship => board[position].split('-')[1] == hitship.cha);
   let index = board[position].split('-')[0];
   board[position] += 'X';
   ship[0].hit(index);
}
};

const allSunk = (ships) => {
return  ships.every(ship => ship.isSunk());
};



return { validatePlacement, placeShip, receiveAttack, allSunk };
})();
export default Gameboard