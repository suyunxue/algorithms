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


var arr = [23, 4, 32, 6, 43, 56, 13, 2];
insertSortRecursion(arr, 0, arr.length);
console.log(arr);

















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
