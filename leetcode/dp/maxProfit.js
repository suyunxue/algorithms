/**
 * 暴力法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var max;

    if (prices.length <= 1) {
        return 0;
    }

    for (var i = 0; i < prices.length; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            if (!max) {
                max = prices[j] - prices[i];
            } else {
                if (max < (prices[j] - prices[i])) {
                    max = prices[j] - prices[i];
                }
            }
        }
    }
    if (max <= 0) {
        max = 0;
    }

    return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var minPrice = Infinity;
    var maxProfit = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};