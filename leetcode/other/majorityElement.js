/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityCount = nums.length / 2;
    while (true) {
        let rand = parseInt(Math.random() * nums.length, 10);
        let candidate = nums[rand];
        if (countOccurences(nums, candidate) > majorityCount) {
            return candidate;
        }
    }
};

function countOccurences(nums, num) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === num) {
            count++;
        }
    }

    return count;
}

let input = [3,2,3];
let res = majorityElement(input);
console.log(res);