function quickSort(A, p, r) {
    if (p < r) {
        q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

function pratition(A, p, r) {
    var x = A[r];
    var i = p - 1;
    for (var j = p; j < r - 1; j++) {
        if (A[j] <= x) {
            i = i + 1;
            exchange(A[i], A[j]);
        }
    }
    exchange(A[i + 1], A[r]);
    return i + 1;
}

var arr = [1, 43, 32, 53, 32, 54, 5, 6, 9];
