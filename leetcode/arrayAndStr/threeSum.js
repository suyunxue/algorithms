/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }

    nums.sort((a, b) => {
        return a - b;
    });

    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return res;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = nums.length - 1;


        while (l < r) {
            if ((nums[i] + nums[l] + nums[r]) === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) {
                    l++;
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--;
                }
                l++;
                r--;
            }
            else if ((nums[i] + nums[l] + nums[r]) < 0) {
                l++;
            }
            else {
                r--;
            }
        }
    }

    return res;
};

let res = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(res);