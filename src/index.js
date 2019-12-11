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
     //call to placeship to board
     playerBoard.placeShip(ship[0], parseInt(result.position), playerStorage, result.direction);
     //call to display updated gamboard of player
      player.showBoard(playerStorage, 'playerBoard');
      computer.showBoard(computerStorage, 'computerBoard');
      //placed ships display
      let markup = '';
      playerBoard.placedShips.forEach(ship => {
        markup += `<p>${playerBoard.shipName(ship)}</p>`;
      });
      document.getElementById("mid-section").innerHTML=markup;
  });

  document.getElementById('start').addEventListener('click', ()=> {
    if(playerBoard.placedShips.length < 5){
        console.log("finish placing ships");
    }else{
  document.getElementById('ship-table-container').setAttribute('class', 'hidden');
  document.querySelector('.mid-section').setAttribute('class', 'hidden');
    }
  });
const computerPlay = () => {
  const { ships: [carrier, battleship, cruiser, submarine, destroyer ] } = computerBoard
  const predefinedPlacements = [
   [ [carrier, 0, computerStorage, 'down'], 
     [battleship, 2, computerStorage, 'right'], 
     [cruiser,7 , computerStorage, 'down'], 
     [submarine, 41, computerStorage, 'right'],
     [destroyer, 70, computerStorage, 'right'] 
   ], 
    [ [carrier, 0, computerStorage, 'down'], 
    [battleship, 2, computerStorage, 'down'], 
    [cruiser, 3, computerStorage, 'down'], 
    [submarine, 4, computerStorage, 'down'],
    [destroyer, 5, computerStorage, 'down'] 
   ], 
   [ [carrier, 9, computerStorage, 'down'], 
   [battleship, 2, computerStorage, 'right'], 
   [cruiser, 30, computerStorage, 'down'], 
   [submarine, 44, computerStorage, 'right'],
   [destroyer, 55, computerStorage, 'down'] 
 ]
  
  ];
 let randomPlacement = Math.floor(Math.random() * 3);
  predefinedPlacements[randomPlacement].forEach(placement => {
    computerBoard.placeShip(...placement);
    computer.showBoard(computerStorage, 'computerBoard');
  })
};
const init = () => {
    renderBoards();
    computerPlay();
};

init();