/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const t = [];
    const ans = [];
    const n = nums.length;
    const dfs = (cur, nums) => {
        if (cur === n) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1, nums);
        t.pop();
        dfs(cur + 1, nums);
    }
    dfs(0, nums);

    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var ans = [];
    var n = nums.length;
    for (var mask = 0; mask < (1 << n); mask++) {
        var t = [];
        for (var i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                t.push(nums[i]);
            }
        }
        ans.push(t);
    }
    return ans;
};

let res = subsets([1, 2, 3]);
console.log(res);