
const ui = (() => {
    const displayBoard = (board, elem) => {
        let id = 0;
        let output;
        let markup = '';
        for(let i = 0; i< 10; i++){
            output = '<tr>';
            for(let j = 0; j<10; j++){
                if(board[id] !== null){
                    output += `<td id=${id} class='green'></td>`;
                }else{
                    output += `<td id=${id}></td>`;
                }
                id++;
            }
            output += '</tr>';
            markup += output;
        }
        document.getElementById(`${elem}`).innerHTML = markup;
    };
    return {
        displayBoard
    }
})();

export default ui;
