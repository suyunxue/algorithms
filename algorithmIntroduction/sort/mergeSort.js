/**
 * merge
 * @param  {Array} A 数组
 * @param  {int} p 下标
 * @param  {int} q 下标
 * @param  {int} r 下标
 * @return {Array}   array
 */

//  拿到前面的数字，
function merge(A, p, q, r) {
    var flag = Infinity;
    var n1 = q - p + 1;
    var n2 = r - q;
    var L = new Array(n1);
    var R = new Array(n2);

    console.log(A);

    for (var i = 0; i < n1; i++) {
        L[i] = A[p + i];
    }

    for (var j = 0; j < n2; j++) {
        R[j] = A[q + j + 1];
    }

    console.log(p);
    console.log(q);
    console.log(r);
    console.log(L);
    console.log(R);

    L[n1] = flag;
    R[n2] = flag;

    i = 0;
    j = 0;

    for (var k = p; k <= r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        }
        else {
            A[k] = R[j];
            j++;
        }
    }
}

function mergeSort(A, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

var arr = [23, 4, 32, 6, 43, 56, 13, 2];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

