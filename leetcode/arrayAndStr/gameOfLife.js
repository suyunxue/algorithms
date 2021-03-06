/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let neighbors = [0, 1, -1];

    let rows = board.length;
    let cols = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let liveNeighbors = 0;

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!(neighbors[i] === 0 && neighbors[j] === 0)) {  
                        let r = row + neighbors[i];
                        let c = col + neighbors[j];
                        if ((r < rows && r >= 0) && (c < cols && c >= 0) && (Math.abs(board[r][c]) === 1)) {
                            liveNeighbors += 1;
                        }
                    }
                }
            }

            // 规则1或者3
            if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[row][col] = -1;
            }

            // 规则4
            if (board[row][col] === 0 && liveNeighbors === 3) {
                board[row][col] = 2;
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] > 0) {
                board[row][col] = 1;
            }
            else {
                board[row][col] = 0;
            }
        }
    }
};

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
let res = gameOfLife(board);
console.log(board);