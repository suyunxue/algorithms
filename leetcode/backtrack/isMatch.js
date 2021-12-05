/**
        * @param {string} s
        * @param {string} p
        * @return {boolean}
        */
 var isMatch = function(s, p) {
    var m = s.length;
    var n = p.length;
    var dp = new Array(m + 1).fill(false);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(false);
    }

    dp[0][0] = true;
    console.log(dp)
    for (let i = 1; i <= n; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = true;
        }
        else {
            break;
        }
    }


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
            else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};

var s = "acdcb"
var p = "a*c?b"
var res = isMatch(s, p);
console.log(res);