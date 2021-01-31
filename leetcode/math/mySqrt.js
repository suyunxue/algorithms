/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    var ans = parseInt(Math.exp(0.5 * Math.log(x)));
    return (ans + 1) * (ans + 1) <= x ? (ans + 1) : ans;
};  