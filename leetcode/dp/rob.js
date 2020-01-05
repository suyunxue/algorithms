/**
 * 递推公式
 * f(x) = Max((f(k - 2) + Ak), f(k - 1))
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var curMax = 0;
    var prevMax = 0;
    for (var i = 0; i < nums.length; i++) {
        var temp = curMax;
        curMax = Math.max(prevMax + nums[i], curMax);
        prevMax = temp;
    }

    return curMax;
}

var input = [2, 7, 9, 3, 1];
var res = rob(input);
console.log(res);