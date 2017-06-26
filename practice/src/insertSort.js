/**
 * 从第二个开始和前面的比，只要比他小就放到他的后面
 * 一直到最后一个数字
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
//从小到大
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

// 从大到小
function insertSort(arr) {
        for (var i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = i - 1;
            while(key > arr[j] && j >= 0) {
                arr[j+1] = arr[j];
                arr[j] = key;
                j = j - 1;
            }
        }

    console.log(arr);
}