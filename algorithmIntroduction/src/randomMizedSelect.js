/**
 * 找数组中第i小的数
 */

function randomMizedSelect(A, p, r, i) {
    var q;
    var k;

    if (p === r) {
        return A[p];
    }

    q = randomizedParition(A, p, r);

    k = q - p + 1;

    if (i === k) {
        return A[q];
    }
    else if (i < k) {
        return randomMizedSelect(A, p, q - 1, i);
    }
    else {
        return randomMizedSelect(A, q + 1, r, i - k);
    }

}

function randomizedParition(A, p, r) {
    var i;
    var tmp;

    console.log(A, p, r);

    i = p +  Math.round(Math.random() * (r - p));

    swap(A, i, r);

    return partition(A, p, r);
}

function partition(A, p, r) {
    var a;
    var i;
    var j;
    var temp;

    i = p - 1;
    a = A[r];

    for (j = p; j < r; j++) {
        if (A[j] <= a) {
            i++;
            swap(A, i, j);
        }
    }

    swap(A, r, i + 1);

    return i + 1;

}

function swap(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}


var arr = [3, 43, 342, 4, 32]; // 3, 4, 32, 43, 342
console.log(randomMizedSelect(arr, 0, arr.length - 1, 3));
