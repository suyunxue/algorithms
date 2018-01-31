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
insertionSort(arr);
insertSortDown(arr);
