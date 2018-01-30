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
