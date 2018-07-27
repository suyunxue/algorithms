/**
 * money 需要找的零钱
 * coin 可用的硬币
 * n 硬币的种类
 * https://blog.csdn.net/KangRoger/article/details/36036101
 */
function findMin(money, coin, n) {
    var coinNum = new Array(money + 1);
    var coinValue = new Array(money + 1);

    for (var i = 0; i < money; i++) {
        var minNum = i;
        var userdMoney = 0;
        for (var j = 0; j < n; j++) {
            if (i >= coin[j]) {
                if (coinNum[i - coin[j]] + 1 <= minNum
                    && (i == coin[j] || coinValue[i - coin[j]] != 0)) {

                }
            }
        }
    }


}
