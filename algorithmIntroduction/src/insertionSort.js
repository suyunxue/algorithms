/**
 * 插入排序二分查找插入
 */
// 二分查找策略，找出要插入的位置
function binary(A, p, r, v) {
    for (var i = p; i <= r; i++) {
        if (A[i] > v) {
            return i;
        }
    }

    return -1;
}


// 二分查找的递归过程
function binarySearch(A, p, r, v) {
    var q;
    if (A[0] > v && p === 0 && r === 0) {
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

// 采用二分查找的递归算法，时间复杂度nlgn
function insertSort(A) {
    var key;
    var j;
    var k;
    for (var i = 1; i < A.length; i++) {
        key = A[i];
        j = i - 1;
        k = binarySearch(A, 0, j, key);
        console.log(k)
        if (k != -1) {
            for (var s = j; s >= k; s--) {
                A[s + 1] = A[s];
            }
            A[k] = key;
        }
    }
}

var arr = [23, 4, 32, 6, 43, 56, 13, 2];
insertSort(arr);
console.log(arr);


/**
 * 插入排序递归过程
 * 插入排序可以表示为一个递归过程，为了排序A[1...n]，我们递归地排序A[1...n-1],我们把A[n]
 * 插入已排序的数组A[1...n-1]，为插入排序的这个递归版本的最坏情况运行时间写一个递归式
 */
function insertSortRecursion(A, p, r) {
    if (p < r) {
        r = r - 1;
        insertSortRecursion(A, p, r);
        insert(A, p, r);
    }
}

function insert(A, p, r) {
    for (var i = p; i < r; i++) {
        console.log(r);
        key = A[i];
        j = i - 1;
        while (j >= 0 && key > A[j]) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = key;
    }
}


// var arr = [23, 4, 32, 6, 43, 56, 13, 2];
// insertSortRecursion(arr, 0, arr.length);
// console.log(arr);













/**
 * 插入排序
 * 手拿牌进行比较，每次从桌子上拿走一张牌并将它插入到左手正确的位置。为了找到一张牌的位置，我们从右到左将它与已在手中的每张牌进行比较
 *
 * 循环不变式
 * 初始化
 * 保持
 * 终止
 */
function insertionSort(arr) {
    var key, i;
    for (var j = 1; j < arr.length; j++) {
        key = arr[j];
        i = j - 1;
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i = i - 1;
        }
        arr[i + 1] = key;
    }

    console.log(arr);

    return arr;
}

function insertSortDown(arr) {
    var key, i;
    for (var j = 1; j < arr.length; j++) {
        key = arr[j];
        i = j - 1;
        while (i >= 0 && arr[i] < key) {
            arr[i + 1] = arr[i];
            i = i - 1;
        }
        arr[i + 1] = key;
    }

    console.log(arr);

    return arr;
}


var arr = [23, 4, 32, 6, 43, 56, 13, 2];
// insertionSort(arr);
// insertSortDown(arr);
