/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var dp = new Array(nums.length).fill(1);
    var maxans = 1;
    for (var i = 1; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxans = Math.max(maxans, dp[i]);   
    }

    return maxans;
};

var nums = [10, 9, 2, 5, 3, 7, 101, 18];
var res = lengthOfLIS(nums);
console.log(res);