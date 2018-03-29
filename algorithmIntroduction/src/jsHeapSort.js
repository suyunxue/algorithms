var len;

function buildMaxHeap(arr) {
    len = arr.length;
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapfiy(arr, i);
    }
}

function heapfiy(arr, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapfiy(arr, largest);
    }

}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapfiy(arr, 0);
    }

    return arr;
}

var arr = [2, 43, 32, 4, 54, 65, 89, 3];
console.log(heapSort(arr));