/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.origin = nums.slice(0);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = this.origin;
    this.origin = this.nums.slice(0);
    return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    function swapAt(i, j, nums) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    for (var i = 0; i < this.nums.length; i++) {
        swapAt(i, random(i, this.nums.length), this.nums);
    }

    return this.nums;
};


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
var obj = new Solution(["Solution", "shuffle","reset","shuffle"]);
var param_1 = obj.reset();
console.log(param_1);
var param_2 = obj.shuffle();
console.log(param_2);