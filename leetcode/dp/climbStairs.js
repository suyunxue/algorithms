// 动态规划版本
var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    var dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
 
 
 
 /**
  * @param {number} n
  * @return {number}
  */
 var climbStairs = function (n) {
    var memo = [];
    return climb_Stairs(0, n, memo);
 };

 function climb_Stairs(i, n, memo) {
    if (i > n) {
        return 0;
    }
    if (i === n) {
        return 1;
    }

    if (memo[i] > 0) {
        return memo;
    }

    memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);

    return memo[i];
 }