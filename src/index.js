import ui from './modules/ui';
import Gameboard from './modules/data/gameboard';
import Player from './modules/data/players';
import ShipFactory from './modules/data/ship';


   const playerStorage = new Array(100).fill(null);
   const computerStorage = new Array(100).fill(null);

   const playerBoard = Gameboard();
   const computerBoard = Gameboard();
   
   const player = Player('player', playerBoard);
   const computer = Player('computer', computerBoard);
   
  const renderBoards = () => {
   player.showBoard(playerStorage, 'playerBoard');
   computer.showBoard(computerStorage, 'computerBoard');
  };
  
   document.getElementById('submit').addEventListener('click', () => {
      const result = ui.getPlacement();
     let ship = playerBoard.ships.filter(ship => ship.cha == result.ship)
     playerBoard.placeShip(ship[0], parseInt(result.position), playerStorage, result.direction);
      player.showBoard(playerStorage, 'playerBoard');
      computer.showBoard(computerStorage, 'computerBoard');
  });

const init = () => {
    renderBoards();
};

init();