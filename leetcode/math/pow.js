function quickMul(x, N) {
    if (N === 0) {
        return 1;
    }

    var y = quickMul(x, parseInt(N / 2));
    return N % 2 === 0 ? y * y : y * y * x;
}

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var N = n;
    return N > 0 ? quickMul(x, N) : 1 / quickMul(x, -N);
};
