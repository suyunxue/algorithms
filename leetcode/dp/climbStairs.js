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