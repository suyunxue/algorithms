/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var bits = 0;
    var mask = 1;

    for (var i = 0; i < 32; i++) {
        if ((n & mask) !== 0) {
            bits++;
        }
        mask <<= 1;
    }

    return bits;
};

var hammingWeight2 = function (n) {
    var bits = 0;
    while (n !== 0) {
        bits++;
        n = n & (n - 1);
    }

    return bits;
}