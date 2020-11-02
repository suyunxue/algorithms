/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var len = nums.length;
    if (len < 2) {
        return nums;
    }
    var p0 = 0;
    var i = 0;
    var p2 = len - 1;

    // 0-p0为0 p0-i为1 i-p2为2
    while (i <= p2) {
        if (nums[i] === 0) {
            swap(nums, i, p0);
            p0++;
            i++;
        } else if (nums[i] === 1) {
            i++;
        } else {
            swap(nums, i, p2);
            p2--;
        }
    }

    return nums;
};

function swap(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let res = sortColors([2, 0, 2, 1, 1, 0]);
console.log(res)