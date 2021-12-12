/**
         * @param {string} s
         * @param {string} p
         * @return {boolean}
         */
 var isMatch = function(s, p) {
    var m = s.length;
    var n = p.length;

    var f = new Array(m + 1).fill(false);
    for (var i = 0; i < f.length; i++) {
        f[i] = new Array(n + 1).fill(false);
    }   

    f[0][0] = true;

    for (var i = 0; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                f[i][j] = f[i][j - 2];
                if (matches(s, p, i, j - 1)) {
                    f[i][j] = f[i][j] || f[i - 1][j];
                }
            }
            else {
                if (matches(s, p, i, j)) {
                    f[i][j] = f[i - 1][j - 1];
                }
            }
        }
    }

    return f[m][n];


    function matches(s, p, i, j) {
        if (i === 0) {
            return false;
        }

        if (p[j - 1] === '.') {
            return true;
        }

        return s[i - 1] === p[j - 1];
    }
};

var s = "aa"
var p = "a*"
var res = isMatch(s, p);
console.log(res);