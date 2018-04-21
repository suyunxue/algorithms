function quickSort(A, p, r) {
    if (p < r) {
        q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

function partition(A, p, r) {
    var x = A[r];
    var i = p - 1;
    for (var j = p; j <= r - 1; j++) {
        if (A[j] <= x) {
            i = i + 1;
            console.log(i);
            console.log(j);
            exchange(A, i, j);
        }
    }
    exchange(A, i + 1, r);
    return i + 1;
}

function exchange(A, i, j) {
    var tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
}

var arr = [1, 43, 32, 53, 32, 54, 5, 6, 9];

quickSort(arr, 0, arr.length - 1);
console.log(arr)
