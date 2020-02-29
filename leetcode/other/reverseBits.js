/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var ans = 0;
    for (var i = 0; i < 32; i++) {
        ans <<= 1;
        ans += (n & 1);
        n >>= 1;
    }

    return ans >>> 0;
};
