/**
    * @param {number[]} coins
    * @param {number} amount
    * @return {number}
    */
    var coinChange = function(coins, amount) {
    if (amount < 1) {
        return 0;
    }
    var count = new Array(amount).fill(0);
    return coinChangeCompute(coins, amount, count);
};

function coinChangeCompute(coins, rem, count) {
    if (rem < 0) {
        return -1;
    }

    if (rem === 0) {
        return 0;
    }

    if (count[rem - 1] !== 0) {
        return count[rem - 1];
    } 

    var min = Number.MAX_VALUE;
    for (var i = 0; i < coins.length; i++) {
        var res = coinChangeCompute(coins, rem - coins[i], count);
        if (res >= 0 && res < min) {
            min = 1 + res;
        }
    }

    count[rem - 1] = (min === Number.MAX_VALUE) ? -1 : min;
    return count[rem - 1];
}

var coins = [1, 2, 5], amount = 11;
var res = coinChange(coins, amount);
console.log(res);