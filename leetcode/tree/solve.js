/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let n = board.length;
    if (n === 0) {
        return;
    }
    let m = board[0].length;

    for (let i = 0; i < n; i++) {
        dfs(board, i, 0);
        dfs(board, i, m - 1);
    }

    for (let i = 1; i < m - 1; i++) {
        dfs(board, 0, i);
        dfs(board, n - 1, i);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'A') {
                board[i][j] = 'O';
            }
            else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }

    function dfs(board, x, y) {
        if (x < 0 || y < 0 || x >= n || y >= m || (board[x][y] !== 'O')) {
            return;
        }

        board[x][y] = 'A';
        dfs(board, x, y - 1);
        dfs(board, x, y + 1);
        dfs(board, x - 1, y);
        dfs(board, x + 1, y);
    }
};

let board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(board);
console.log(board)