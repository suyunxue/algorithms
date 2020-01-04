/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var ans = nums[0];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        ans = Math.max(ans, sum);
    }

    return ans;
};