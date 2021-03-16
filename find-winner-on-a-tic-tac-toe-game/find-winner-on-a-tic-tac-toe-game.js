/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const size = 3;
    const board = [[],[],[]];

    moves.forEach((move, index) => {
        if (index % 2 === 0) {
            board[move[1]][move[0]] = 'X';
        } else {
            board[move[1]][move[0]] = 'O';
        }
    });

    let winner = '';

    for (let x = 0; x < size; x++) {
        let sum = 1;
        let player = '';
        for (let y = 0; y < size - 1; y++) {
            if (board[x][y] && board[x][y] === board[x][y + 1]) {
                sum++;
                player = board[x][y];
            }
        }
        if (sum === 3) {
            winner = player === 'X' ? 'A' : 'B';
            break;
        }
    }

    if (!winner) {
        for (let y = 0; y < size; y++) {
            let sum = 1;
            let player = '';
            for (let x = 0; x < size - 1; x++) {
                if (board[x][y] && board[x][y] === board[x + 1][y]) {
                    sum++;
                    player = board[x][y];
                }
            }

            if (sum === 3) {
                winner = player === 'X' ? 'A' : 'B';
                break;
            }
        }
    }
    
    if (!winner) {
        let sum = 1;
        for(let i = 0; i < size - 1; i++){
            if (board[i][size - i - 1] && board[i][size - i - 1] === board[i + 1][size - i - 2]) {
                sum++;
            }
        }

        if (sum === 3) {
            winner = board[0][size-  1] === 'X' ? 'A' : 'B';
        }
    }
    
    if (!winner) {
        let sum = 1;
        for(let i = 0; i < size - 1; i++){
            if (board[i][i] && board[i][i] === board[i + 1][i + 1]) {
                sum++;
            }
        }
        
         if (sum === 3) {
            winner = board[0][0] === 'X' ? 'A' : 'B';
        }
    }
    
    if (!winner && moves.length !== 9) {
        return "Pending";
    }
    
    if (!winner && moves.length === 9) {
        return "Draw";
    }
    
    return winner;
};