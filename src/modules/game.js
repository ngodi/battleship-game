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


   const showBoards = () => {
      ui.displayBoard(playerStorage, 'playerBoard');
      ui.displayBoard(computerStorage, 'computerBoard');
   }

   const place = () => {
      Gameboard.placeShip(carrier, 0, playerStorage, 'down');
      Gameboard.placeShip(battleship, 11, playerStorage, 'right');
      Gameboard.placeShip(cruiser, 37, playerStorage, 'down');
  }
  const attack = () => {
     Gameboard.receiveAttack(20, playerStorage);
     Gameboard.receiveAttack(31, playerStorage);
     Gameboard.receiveAttack(37, playerStorage);
     Gameboard.receiveAttack(37, playerStorage);
  }
  /*  const player = Player('player', turn=true, playerBoard);
   const computer = Player('computer', turn=false, computerBoard); */
   return { showBoards, place, attack, carrier, battleship, cruiser, submarine, destroyer }
})();

export default Game;