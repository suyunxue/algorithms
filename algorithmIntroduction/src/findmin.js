/**
 * money 需要找的零钱
 * coin 可用的硬币
 * n 硬币的种类
 * https://blog.csdn.net/KangRoger/article/details/36036101
 * https://blog.csdn.net/wdxin1322/article/details/9501163
 * 看到第3段
 */
function findMin(money, coin, n) {
    var coinNum = new Array(money + 1); // 最少需要的硬币个数
    var coinValue = new Array(money + 1); // 最后加入的硬币，方便后面输出的是哪几个硬币

    for (var i = 0; i < money + 1; i++) {
        coinNum[i] = 0;
        coinValue[i] = 0;
    }

    for (var i = 0; i < money; i++) {
        var minNum = i;
        var usedMoney = 0;
        for (var j = 0; j < n; j++) {
            if (i >= coin[j]) {
                console.log('coin[j]', coin[j]);
                if (coinNum[i - coin[j]] + 1 <= minNum) {
                // }
                    // && (i == coin[j] || coinValue[i - coin[j]] != 0)) {
                    minNum = coinNum[i - coin[j]] + 1;
                    console.log('minNum', minNum);
                    usedMoney = coin[j];  // 更新
                }
            }
        }

        // d[i] = min{d[i - vj] + 1} i-vj >= 0 状态转移方程

        coinNum[i] = minNum; // 硬币数量
        coinValue[i] = usedMoney; // 最大花的硬币数
    }

    console.log(coinValue);
    console.log(coinNum);

    // while (money > 0) {
    //     console.log(coinValue[money]);
    //     money -= coinValue[money];
    // }

    // if (coinValue[money] === 0) {
    //     console.log('找不开零钱');
    // }
    // else {
    //     console.log('需要最少硬币个数为： ', coinNum[money]);
    //     console.log('硬币分别为');
    //     while (money > 0) {
    //         console.log(coinValue[money]);
    //         money -= coinValue[money];
    //     }
    // }
}

var money = 18;
var coin = [1, 2, 5, 9, 10];
findMin(money, coin, 5);
