import ui from './ui';
import Gameboard from './data/gameboard';
import Player from './data/players';
import ShipFactory from './data/ship';

const Game = (() => {
    
   const playerStorage = new Array(100).fill(null);
   const computerStorage = new Array(100).fill(null);
   
   const carrier = ShipFactory(5, 'c');
   const battleship = ShipFactory(4, 'b');
   const cruiser = ShipFactory(3,'cr');
   const submarine = ShipFactory(3,'s');
   const destroyer = ShipFactory(2,'d');

   const player = Player('player', playerStorage);
   const computer = Player('computer', computerStorage);
   
  const renderBoards = () => {
   player.showBoard(playerStorage, 'playerBoard');
   computer.showBoard(computerStorage, 'computerBoard');
  }
  
  const getInput = () => {
   document.getElementById('submit').addEventListener('click', () => {
      const result = ui.getPlacement();
      player.place(result.ship, result.position, playerStorage, result.direction);
  });
  };

   return {player, computer, renderBoards, getInput }
})();

export default Game;