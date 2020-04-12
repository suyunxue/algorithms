/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || !grid.length) {
        return 0;
    }

    var nr = grid.length;
    var nc = grid[0].length;

    var numIsLands = 0;

    for (var r = 0; r < nr; r++) {
        for (var c = 0; c < nc; c++) {
            if (grid[r][c] === '1') {
                numIsLands++;
                dfs(grid, r, c);
            }
        }
    }

    return numIsLands;
};

function dfs(grid, r, c) {
    var nr = grid.length - 1;
    var nc = grid[0].length - 1;

    if (r < 0 || c < 0 || r > nr || c > nc || grid[r][c] === '0') {
        return;
    }

    grid[r][c] = '0';
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}