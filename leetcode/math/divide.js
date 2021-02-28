/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let MAX_VALUE = Math.pow(2, 31) - 1;
    let MIN_VALUE = Math.pow(-2, 31);
    if (dividend === 0) {
        return 0;
    }
    if (divisor === 1) {
        return dividend;
    }
    if (divisor === -1) {
        if (Math.abs(dividend) > MAX_VALUE) {
            return MAX_VALUE;
        }
        else if (Math.abs(dividend) > MIN_VALUE) {
            return -dividend;
        }
        else {
            return MAX_VALUE;
        }
    }

    let a = dividend;
    let b = divisor;

    let sign = 1;

    if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        sign = -1;
    }

    a = a > 0 ? a : -a;
    b = b > 0 ? b : -b;

    let res = div(a, b);

    if (sign > 0) {
        return res > MAX_VALUE ? MAX_VALUE : res;
    }
    return -res;
};

function div(a, b) {
    if (a < b) {
        return 0;
    }

    let count = 1;
    let tb = b;
    while ((tb + tb) < a) {
        count = count + count;
        tb = tb + tb;
    }

    return count + div(a - tb, b);
}

let res = divide(-2147483648, -1);
console.log(res);