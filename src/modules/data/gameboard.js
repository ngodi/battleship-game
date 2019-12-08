import ShipFactory from './ship';

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
const findShip = (ships, board) => {
  return ships.filter(ship =>{
        return board[position] == ship.cha.split('-')[1]
    });
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
    console.log('invalid ship placement');
}

};
const receiveAttack = (position, board) => {
  if(board[position] === null || board[position] === undefined || board[position] === 'O'){
    board[position] = 'O';
    return 'missed shot';
  }else if(board[position] === 'X'){
      return 'hit already';
  }else{
   let ship = findShip()[0];
   let index = ship.cha.split('-')[0];
   ship.hit(index);
}
};

const allSunk = (ships) => {
return  ships.every(ship => ship.isSunk());
};



return { validatePlacement, placeShip, receiveAttack, allSunk };
})();
export default Gameboard