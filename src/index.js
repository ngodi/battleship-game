/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable arrow-parens */
import ui from './modules/ui';
import Gameboard from './modules/data/gameboard';
import Player from './modules/data/players';

const playerBoard = Gameboard();
const computerBoard = Gameboard();

const player = Player('player', playerBoard);
const computer = Player('computer', computerBoard);

const renderBoards = () => {
  ui.displayBoard(playerBoard.data, 'playerBoard');
  ui.displayBoard(computerBoard.data, 'computerBoard');
};

const computerInit = () => {
  const { ships: [carrier, battleship, cruiser, submarine, destroyer] } = computerBoard;
  const predefinedPlacements = [
    [[carrier, 0, computerBoard.data, 'down'],
      [battleship, 2, computerBoard.data, 'right'],
      [cruiser, 7, computerBoard.data, 'down'],
      [submarine, 41, computerBoard.data, 'right'],
      [destroyer, 70, computerBoard.data, 'right'],
    ],
    [[carrier, 0, computerBoard.data, 'down'],
      [battleship, 2, computerBoard.data, 'down'],
      [cruiser, 3, computerBoard.data, 'down'],
      [submarine, 4, computerBoard.data, 'down'],
      [destroyer, 5, computerBoard.data, 'down'],
    ],
    [[carrier, 9, computerBoard.data, 'down'],
      [battleship, 2, computerBoard.data, 'right'],
      [cruiser, 30, computerBoard.data, 'down'],
      [submarine, 44, computerBoard.data, 'right'],
      [destroyer, 55, computerBoard.data, 'down'],
    ],

  ];
  const randomPlacement = Math.floor(Math.random() * 3);
  predefinedPlacements[randomPlacement].forEach(placement => {
    computerBoard.placeShip(...placement);
    ui.displayBoard(computerBoard.data, 'computerBoard');
  });
};

document.getElementById('submit').addEventListener('click', () => {
  const { ship, position, direction } = ui.getPlacement();
  const selectedShip = playerBoard.ships.filter(sh => sh.cha === ship);
  const message = playerBoard.placeShip(selectedShip[0], parseInt(position),
    playerBoard.data, direction);

  ui.displayBoard(playerBoard.data, 'playerBoard');
  ui.showMessage(message);

  let markup = '<ol>';
  playerBoard.placedShips.forEach(e => {
    markup += `<li>${playerBoard.shipName(e)}</li>`;
  });
  markup += '</ol>';
  document.getElementById('mid-section').innerHTML = markup;
});
const computerAttack = () => {
  const computerHits = [];
  let position = Math.floor(Math.random() * 100);
  if (computerHits.includes(position)) {
    while (computerHits.includes(position)) {
      position = Math.floor(Math.random() * 100);
    }
  } else {
    computer.attack(playerBoard, position, playerBoard.data);
    ui.displayBoard(playerBoard.data, 'playerBoard');
    computerHits.push(position);
    if (playerBoard.allSunk()) {
      ui.showMessage('Computer WINS');
      return 0;
    }
  }
};

const playerAttack = () => {
  for (let i = 0; i < 100; i++) {
    document.getElementById(`${i}`).addEventListener('click', () => {
      const result = player.attack(computerBoard, i, computerBoard.data);
      if (result) {
        if (computerBoard.data[i] === 'O') {
          document.getElementById(`${i}`).innerText = 'O';
        } else if (/X/.test(computerBoard.data[i])) {
          document.getElementById(`${i}`).innerText = 'X';
        }
        if (computerBoard.allSunk()) {
          ui.showMessage('Player WINS');
          return 0;
        }
        computerAttack();
      }
    });
  }
};

document.getElementById('start').addEventListener('click', () => {
  if (playerBoard.placedShips.length < 5) {
    ui.showMessage('finish placing ships');
  } else {
    document.getElementById('ship-table-container').setAttribute('class', 'hidden');
    playerAttack();
  }
});

const init = () => {
  renderBoards();
  computerInit();
};

init();
