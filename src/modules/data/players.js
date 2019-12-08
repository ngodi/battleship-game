const Player = (type, turn, board) => {
    this.type= type;
    this.turn = turn;
    this.board = board;
    function attack(board, row, col){
        board.receiveAttack(row, col);
    }
  return { attack };
  };
  
  export default Player