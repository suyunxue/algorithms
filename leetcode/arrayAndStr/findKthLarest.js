function findKthLarest(nums, k) {
    let n = nums.length;
    // debugger
    for (let i = 0; i < k; i++) {
        heapify(nums, n - i);
        [nums[0], nums[n - 1 - i]] = [nums[n - 1 - i], nums[0]];
    }

    return nums[n - k];
}

function heapify(nums, n) {

    for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
        adjustHeap(nums, i, n);
    }
}

function adjustHeap(nums, i, n) {
    let k;
    let temp = nums[i];
    for (let k = i * 2 + 1; k < n; k = k * 2 + 1) {
        if (k + 1 < n && nums[k] < nums[k + 1]) {
            k++;
        }
        if (nums[i] < nums[k]) {
            nums[i] = nums[k];
            i = k;
        } else {
            break;
        }
    }
    nums[i] = temp;
}

let nums = [1, 35, 5, 6, 65];
// heapify(nums, nums.length);
// console.log(nums);
let res = findKthLarest(nums, 2)
console.log(nums, res);