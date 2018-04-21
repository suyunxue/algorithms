function PARENT(i) {
    return Math.floor(i / 2);
}

function LEFT(i) {
    return 2 * i;
}

function RIGHT(i) {
    return 2 * i + 1;
}

// 维护堆的性质
function maxHeaplfy(A, i) {
    var l = LEFT(i);
    var r = RIGHT(i);
    if (l <= A.heapSize && A[l] > A[i]) {
        largest = l;
    }
    else {
        largest = i;
    }

    if (r <= A.heapSize && A[r] > A[largest]) {
        largest = r;
    }

    if (largest != i) {
        exchange(A[i], A[largest]);
        maxHeaplfy(A, largest);
    }
}