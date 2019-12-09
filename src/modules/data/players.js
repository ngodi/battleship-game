const Player = (type, turn, board) => {
    this.type= type;
    this.turn = turn;
    this.board = board;
    function attack(enemyBoard, position){
        enemyBoard.receiveAttack(position);
    }
  return { attack };
  };
  
  export default Player