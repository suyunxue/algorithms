function getNext(n) {
    var totalSum = 0;
    while (n > 0) {
        var d = n % 10;
        n = parseInt(n / 10);
        totalSum += d * d;
    }

    return totalSum;
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && (seen[n] === undefined)) {
        seen[n] = 1;
        n = getNext(n);
    }

    return n === 1;
};

let res = isHappy(19);
console.log(res);