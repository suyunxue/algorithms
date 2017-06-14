/**
 * 贪心算法
 *
 * 找每个阶段最优选择，从而达到全局的最优
 */
function MinCoinChange(coins) {
    var coins = coins;

    this.makeChange = function (amount) {
        var change = [];
        var total = 0;
        for (var i = coins.length; i >= 0; i--) {
            var coin = coins[i];
            while(coin + total <= amount) {
                change.push(coin);
                total += coin;
            }
        }

        return change;
    }
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));