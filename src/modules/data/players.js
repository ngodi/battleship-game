import ui from '../ui';

const Player = (name, board, storage) => {
    const attack = (enemyBoard, position, storage) => {
        enemyBoard.receiveAttack(position, storage);
    }

   const showBoard = (boardStorage, boardName) => {
    ui.displayBoard(boardStorage, boardName);
 }

  return { attack, showBoard, name, board, storage};
  };
  
  export default Player