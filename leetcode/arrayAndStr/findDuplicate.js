/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numSet = new Set();
    for (let num of nums) {
        numSet.add(num);
    }

    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let curNum = num + 1;
            let currentStreak = 1;
            while (numSet.has(curNum)) {
                curNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

let nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
let long = longestConsecutive(nums);
console.log(long);