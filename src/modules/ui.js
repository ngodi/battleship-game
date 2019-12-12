import { playerAttack } from '../index';
const ui = (() => {
    const displayBoard = (board, elem) => {
        let id = 0;
        let output;
        let markup = '';
        for(let i = 0; i< 10; i++){
            output = '<tr>';
            for(let j = 0; j<10; j++){
                if(board[id] !== null){               
                    if(/X/.test(board[id])){
                   output += (elem == 'playerBoard')?
                   `<td class='hit green'>${board[id].match(/X/)[0]}</td>`:
                   `<td id=${id}></td>`;
                    }else if(/O/.test(board[id])){
                        output += (elem == 'playerBoard')?
                    `<td class='miss'>${board[id].match(/O/)[0]}</td>`:
                    `<td id=${id} class='miss'></td>`; 
                    }else{
                        output += (elem == 'playerBoard')?
                          `<td class='green'></td>`:
                          `<td id=${id}></td>`; 
                    }
                }else{
                    output += (elem == 'playerBoard')?
                          `<td></td>`:
                          `<td id=${id}></td>`; 
                }
                id++;
            }
            output += '</tr>';
            markup += output;
        }
        document.getElementById(`${elem}`).innerHTML = markup;
    };
    const getPlacement = () => {
        const ship = document.getElementById('ship').value;
        const position = document.getElementById('position').value;
        const direction = document.getElementById('direction').value;
        return {
            ship, position, direction
        }
    };
    const showMessage = (message) => {
     document.getElementById('message-section').innerHTML = message;
    };

    return {
        displayBoard, getPlacement, showMessage
    }
   
})();

export default ui;
