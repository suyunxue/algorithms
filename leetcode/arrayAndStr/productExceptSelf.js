/**
 * @param {number[]} nums
 * @return {number[]}
 * 时间n 
 * 空间n
 */
var productExceptSelf = function(nums) {
    const length = nums.length;

    const L = new Array(length);
    const R = new Array(length);

    const answer = new Array(length);

    L[0] = 1;
    for (let i = 1; i < length; i++) {
        L[i] = L[i - 1] * nums[i - 1];
    }

    R[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        R[i] = R[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < length; i++) {
        answer[i] = L[i] * R[i];
    }

    return answer;            
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 时间 n
 * 空间 1
 */
var productExceptSelf = function(nums) {
    const length = nums.length;

    const answer = new Array(length);

    answer[0] = 1;
    for (let i = 1; i < length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    let R = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * R;
        R *= nums[i];
    }

    return answer;            
};

let input = [1,2,3,4];
let res = productExceptSelf(input);
console.log(res);