var merge = function (nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var len = m + n - 1;

    while (i >=0 && j >=0) {
        nums1[len--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }

    nums1.splice(0, j + 1, ...nums2.slice(0, j + 1));

    return nums1;
};

let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];
let res = merge(arr1, 3, arr2, 3);
console.log(res);