// 实现最大优先队列
function heapMaximum(A) {
    return A[1];
}

function heapExtractMax(A) {
    if (A.heapSize < 1) {
        console.error('heap underflow');
    }
    max = A[1];
    A[1] = A[A.heapSize];
    A.heapSize = A.heapSize - 1;
    maxHeapify(A, 1);

    return max;
}

function increaseKey() {

}