
function findMaxValue(maxWeight, numGoods, weight, value) {
    var max = new Array(numGoods + 1);
    for (var i = 0; i < numGoods + 1; i++) {
        max[i] = new Array(maxWeight + 1);
    }
    for (var i = 0; i < numGoods + 1; i++) {
        for (var j = 0; j < maxWeight + 1; j++) {
            max[i][j] = 0;
        }
    }

    for (var j = 1; j <= numGoods; j++) {
        for (var k = 1; k <= weight; k++) {
            if (weight[j - 1] > k) {
                max[j][k] = max[j - 1][k]; // 当加入一个物品的重量大于k这个物品一定不能选
            }
            else {
                var a = max[j - 1][k]; // 不选第j个物品
                var b = value[j - 1] + max[j - 1][k - weight[j - 1]]; // 可以选择低j个物品，
                max[j][k] = a > b ? a : b; // 选择第j个和不选第j个物品，哪个大就选哪个
            }
        }
    }

    return max[numGoods][maxWeight];
}

var w = 11;
var n = 5;
var value = [1, 6, 18, 22, 28];
var weight = [1, 2, 5, 6, 7];
var res = findMaxValue(w, n, weight, value);
console.log(res);
