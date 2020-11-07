/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

function quickSelect(a, l, r, index) {
    var q = randomPartition(a, l, r);
    if (q === index) {
        return a[q];
    } else {
        return q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a, l, q - 1, index);
    }
}

function randomPartition(a, l, r) {
    var i = parseInt(Math.random() * (r - l + 1), 10) + l;
    swap(a, i, r);
    return partition(a, l, r);
}

function partition(a, l, r) {
    var x = a[r];
    var i = l - 1;
    for (var j = l; j < r; j++) {
        if (a[j] <= x) {
            swap(a, ++i, j);
        }
    }
    swap(a, i + 1, r);
    return i + 1;
}

function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}