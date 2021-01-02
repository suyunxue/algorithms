/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var f = new Array(m);
    for (var i = 0; i < m; i++) {
        f[i] = new Array(n).fill(0);
    }

    for (var i = 0; i < m; i++) {
        f[i][0] = 1;
    }

    for (var j= 0; j < n; j++) {
        f[0][j] = 1;
    }

    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            f[i][j] = f[i][j - 1] + f[i - 1][j];
        }
    }

    return f[m - 1][n - 1];
};

var res = uniquePaths(3, 7);
console.log(res);