/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var min = Infinity;
    var mid = Infinity;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] <= min) {
            min = nums[i];
        }
        else if (nums[i] <= mid) {
            mid = nums[i];
        }
        else if (nums[i] > mid) {
            return true;
        }
    }

    return false;
};

let res = increasingTriplet([1,2,3,4,5]);
console.log(res);