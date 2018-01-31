
/**
 * 插入排序,每次找出最小元素和前面对应元素进行交换,首先找出A中的最小元素并将其与A[1]中的元素进行交换，接着找出A中的次最小元素并将其与A[2]中的元素进行交换以此类推
 *
 * @param  {array} arr
 * @return {array} arr
 */
function selectSort(arr) {
    var key = 0;
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        // 找出最小元素
        key = arr[i];
        for (var j = i; j < arr.length; j++) {
            if (key > arr[j]) {
                key = arr[j];
                index = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }

    console.log(arr);


    return arr;
}


var arr = [23232, 3, 54, 32, 543, 21, 5];
selectSort(arr);
