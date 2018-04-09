
// A是输入数组 B存放排序的输出 C提供临时存储空间
function countingSort(A, B, k) {
    var C = new Array(k);
    for (var j = 0; j < k; j++) {
        C[i] = 0;
    }

    for (var j = 0; j < A.length; j++) {
        C[A[j]] = C[A[j]] + 1;
    }

    for (var i = 0; i < k; i++) {
        C[i] = C[i] + C[i - 1];
    }

    for (var j = A.length; j > 0; j--) {
        B[C[A[j]]] = A[j];
        C[A[j]] = C[A[j]] - 1;
    }
}