import ShipFactory from './ship';
import ui from '../ui';
import Gameboard from './gameboard';

const Player = (name, board) => {
    const attack = (enemyBoard, position) => {
        enemyBoard.receiveAttack(position);
    }

   const showBoard = (boardStorage, boardName) => {
    ui.displayBoard(boardStorage, boardName);
 }

  return { attack, showBoard, name, board};
  };
  
  export default Player