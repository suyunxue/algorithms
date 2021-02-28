/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        let carry = (b & a) << 1;
        a = (a ^ b);
        b = carry;
    }
    return a;
};

let sum = getSum(5, 4);
console.log(sum);


