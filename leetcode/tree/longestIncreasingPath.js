/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let rows;
    let columns;

    rows = matrix.length;
    columns = matrix[0].length;

    let memo = new Array(rows).fill(0);
    for (let i = 0; i < rows; i++) {
        memo[i] = new Array(columns).fill(0);
        for (let j = 0; j < columns; j++) {
            memo[i][j] = 0;
        }
    }
    
    let ans = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            ans = Math.max(ans, dfs(matrix, i, j, memo));
        }
    }

    function dfs(matrix, row, col, memo) {
        if (memo[row][col] !== 0) {
            return memo[row][col];
        }

        memo[row][col] = memo[row][col] + 1;

        for (let i = 0; i < dirs.length; i++) {
            let newRow = row + dirs[i][0];
            let newCol = col + dirs[i][1];
            if (newRow >= 0 
                && newRow < rows 
                && newCol >= 0 
                && newCol < columns 
                && matrix[newRow][newCol] > matrix[row][col]) {
                memo[row][col] = Math.max(memo[row][col], dfs(matrix, newRow, newCol, memo) + 1);
            }
        }

        return memo[row][col];
    }

    return ans;

};

let input = [[1,2]];
let res = longestIncreasingPath(input);
console.log(res);