/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let targetRange = [-1, -1];
    let leftIdx = extremeInsertionIndex(nums, target, true);

    if (leftIdx === nums.length || nums[leftIdx] != target) {
        return targetRange;
    }

    targetRange[0] = leftIdx;
    targetRange[1] = extremeInsertionIndex(nums, target, false) - 1;

    return targetRange;
};  

function extremeInsertionIndex(nums, target, left) {
    let lo = 0;
    let hi = nums.length;

    while (lo < hi) {
        let mid = parseInt((lo + hi) / 2);
        if (nums[mid] > target || (left && nums[mid] === target)) {
            hi = mid;
        }
        else {
            lo = mid + 1;
        }
    }
    
    return lo;
}

let res = searchRange([5,7,7,8,8,10], 8);
console.log(res);