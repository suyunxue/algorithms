/**
 * 使用分治法找到数组中中位数第i-大的数
 *
 * 思想：
 *
 */
function select(arr, i) {
    for (var j = 0; j < arr.length / 5; j++) {
        insertSort(arr.slice((j-1) * 5 + 0, (j-1)*5 + 4));
        swap(arr, j, (j-1)*5+2);
        x = arr.slice(0, arr.length/5)[arr.length/10];
        k = arr.indexOf(x);
        if (k = i) {
            return x;
        }
        else if (k > i) {
            return select(arr.slice(0, k - 1), i);
        }
        else {
            return select(arr.slice(k, arr.length), i - k);
        }
    }
}

