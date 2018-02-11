/**
 * 二分查找使用递归查找已经排序好的数组，时间复杂度为lgn
 */
function binary(A, p, r, v) {
    for (var i = p; i <= r; i++) {
        if (A[i] === v) {
            return i;
        }
    }

    return -1;
}

function binarySearch(A, p, r, v) {
    var q;
    if (p === 0 && r === 0 && A[0] === v) {
        return 0;
    }

    if (p < r) {
        q = Math.floor((p + r) / 2);
        if (A[q] > v) {
            binarySearch(A, p, q, v);
            return binary(A, p, q, v);
        }
        else {
            binarySearch(A, q + 1, r, v);
            return binary(A, q + 1, r, v);
        }
    }

    return -1;
}

var arr = [2, 43, 54, 65, 76, 89, 99];
var index = binarySearch(arr, 0, arr.length - 1, 76);
console.log(index);


