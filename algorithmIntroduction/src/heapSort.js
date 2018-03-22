function buildMaxHeap(A) {
    A.heapSize = A.length;
    for (var i = Math.floor(A.length / 2); i >= 1; i--) {
        maxHeapify(A, i);
    }
}



function heapSort(A) {
    buildMaxHeap(A);
    for (var i = A.length; i >= 2; i--) {
        exchange(A[1], A[i]);
        A.heapSize = A.heapSize - 1;
        maxHeapify(A, 1);
    }
}