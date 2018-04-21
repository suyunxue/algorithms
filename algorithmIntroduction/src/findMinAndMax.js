/**
 * 找出最小和最大的数字
 * 如果是奇数把第一个数字设为最小和最大
 * 如果是偶数，取前两个数字比较之后放入最小和最大
 * 只有每次取两个数字进行比较
 * 大的和大的比较
 * 小的和小的比较
 */


function findMinAndMax(arr) {
    var min;
    var max;

    if (!arr.length) {
        return false;
    }

    if (arr.length % 2) {
        min = max = arr[0];

        for (var i = 1; i < arr.length; i += 2) {
            if (arr[i] < arr[i + 1]) {
                max = max < arr[i + 1] ? arr[i + 1] : max;
                min = min < arr[i] ? min : arr[i];
            }
            else {
                min = min < arr[i + 1] ? min : arr[i + 1];
                max = max < arr[i] ? arr[i] : max;
            }
        }

    }
    else {
        if (arr[0] > arr[1]) {
            max = arr[0];
            min = arr[1];
        }
        else {
            max = arr[1];
            min = arr[0];
        }

        for (var i = 2; i < arr.length; i += 2) {
            if (arr[i] < arr[i + 1]) {
                max = max < arr[i + 1] ? arr[i + 1] : max;
                min = min < arr[i] ? min : arr[i];
            }
            else {
                min = min < arr[i + 1] ? min : arr[i + 1];
                max = max < arr[i] ? arr[i] : max;
            }
        }

    }



    console.log(min, max);
}


var arr = [32, 43, 32, 3, 5];

findMinAndMax(arr);