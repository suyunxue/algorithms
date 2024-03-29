/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let n = s.length;
    let arr = s.split('');

    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(true);
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = (arr[i] === arr[j]) && dp[i + 1][j - 1];
        }
    }

    let res = [];
    let path = [];
    dfs(res, path, s, n, dp, 0);
    let ans = new Array(res.length);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = [];
    }

    for (let i = 0; i < res.length; i++) {
        ans[i] = new Array(res[i].length);
        for (let j = 0; j < ans[i].length; j++) {
            ans[i][j] = res[i][j];
        }
    }

    return ans;

};

function dfs(res, path, s, n, dp, pos) {
    if (pos === n) {
        res.push(path.slice(0));
        return;
    }

    for (let i = pos; i < n; i++) {
        // s[pos:i] (闭区间是一个回文，所以递归搜索s[i + 1, s.length - 1])
        if (dp[pos][i]) {
            path.push(s.substring(pos, i + 1));
            dfs(res, path, s, n, dp, i + 1);
            path.pop();
        }
    }
}

let s = "aab";
let res = partition(s);
console.log(res);