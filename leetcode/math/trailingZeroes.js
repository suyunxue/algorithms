/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var zeroCount = 0;
    while (n > 0) {
        n /= 5;
        n = parseInt(n);
        zeroCount += n;
    }
    return zeroCount;
};

let res = trailingZeroes(5);
console.log(res);