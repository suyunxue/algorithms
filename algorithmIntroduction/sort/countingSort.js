
// A是输入数组 B存放排序的输出 C提供临时存储空间
function countingSort(A, B, k) {
    var C = new Array(k);
    for (var j = 0; j < k; j++) {
        C[j] = 0;
    }
    console.log(C);

    for (var j = 0; j < A.length; j++) {
        C[A[j]] = C[A[j]] + 1;
    }

    console.log(C);

    for (var i = 1; i < k; i++) {
        C[i] = C[i] + C[i - 1];
    }

    console.log(C);

    for (var j = 0; j < A.length; j++) {
        B[C[A[j]] - 1] = A[j];
        console.log(B);
        C[A[j]] = C[A[j]] - 1;
        console.log(C);
    }

}

var arr = [2, 43, 43, 2, 4, 65, 6];
var b = [];
countingSort(arr, b, 100);
console.log(b);
