/**
 * 从第二个开始和前面的比，只要比他小就放到他的后面
 * 一直到最后一个数字
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
                if (arr[j] < arr[j-1]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

