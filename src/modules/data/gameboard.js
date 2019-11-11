import ShipFactory from './ship';

const Gameboard = () => {
    
const board =  new Array(10).fill(null).map(() => new Array(10).fill(10));
const boardO =  new Array(10).fill(null).map(() => new Array(10).fill(10));

const validatePlacement = (ship, row, col, direction) => {
    const len = ship.len;
    if(direction == 'd'){
         for(let i = 0; i < len; i++){
            if(board[row + i][col] == undefined && board[row +i][col] != null){
                return false;
            }
       }
    }else if(direction == 'r'){
        for(let i = 0; i < len; i++){
            if(board[row][col + i] == undefined && board[row][col + i] != null){
                return false;
            }
       }
    }
   return true;
};
const findShip = () => {
    ships.filter(ship =>{
        return board[row][col] == ship.cha
    }).map(e => {e.cha});
};
const placeShip = (ship, row, col, direction) => {
    const len = ship.len
    const cha = ship.cha
        // board[row + len-1][col]
        let i = 0;
    while(i < len){
        if(dir == 'd'){
          board[row + i][col] = cha;
          i++;
      }else if(dir == 'r'){
        board[row][col  + i] = cha;
        i++;
     }
  }
};
const receiveAttack = (row, col) => {
  if(board[row][col] == null || board[row][col] == undefined){
      return false;
  }else if(boardO[row][col] != null){
      return 'hit already';
  }else{
   findShip();
}
};
return { board, boardO, validatePlacement, placeShip, receiveAttack };
};
export default Gameboard