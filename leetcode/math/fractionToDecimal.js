/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) {
        return '0';
    }

    var fraction = [];

    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        fraction.push('-');
    }

    var dividend = Math.abs(numerator);
    var divisor = Math.abs(denominator);
    var quotient = dividend / divisor;
    quotient = quotient < 1 ? 0 : parseInt(quotient);
    fraction.push(quotient);
    var remainder = dividend % divisor;
    if (remainder === 0) {
        return fraction.join('');
    }

    fraction.push('.');
    var map = {};
    while (remainder !== 0) {
        if (map[remainder]) {
            fraction.splice(map[remainder], 0, '(');
            fraction.push(')');
            break;
        }

        map[remainder] = fraction.length;
        remainder *= 10;
        var quotient = remainder / divisor;
        quotient = quotient < 1 ? 0 : parseInt(quotient);
        fraction.push(quotient);
        // fraction.push(parseInt(remainder / divisor));
        remainder %= divisor;
    }

    if (fraction.length > Math.pow(10, 4)) {
        return fraction.slice(0, Math.abs(10, 4)).join('');
    }

    return fraction.join('');
};

let numerator = 1, denominator = 214748364;
let res = fractionToDecimal(numerator, denominator);
console.log(res);