
const Player = (name, board) => {
  const attack = (enemyBoard, position, data) => enemyBoard.receiveAttack(position, data);

  return {
    attack, name, board,
  };
};

export default Player;
