import Game from '../src/modules/game';
import Gameboard from '../src/modules/data/gameboard';

test('receives attack and updates target position', ()=>{
    const playerStorage =  new Array(100).fill(null);
    Gameboard.receiveAttack(0, playerStorage);
    expect(playerStorage[0]).not.toBe(null);
   });