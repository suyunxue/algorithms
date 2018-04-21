public class MaxPriorityQueue
{
    private int[] a;
    private int heapSize;

    public MaxPriorityQueue(int[] a, int heapSize)
    {
        this.a = a;
        this.heapSize = heapSize;
    }

    public int heapMaximum()
    {
        return a[0];
    }

    public int left(int i)
    {
        return 2 * i + 1;
    }

    public int right(int i)
    {
        return 2 * i + 2;
    }

    public int parent(int i)
    {
        if(i % 2 == 0)
            return i / 2 - 1;
        else
            return i / 2;
    }

    public void maxHeapify(int i)
    {
        int l = left(i);
        int r = right(i);
        int largest;
        if(l < heapSize && a[l] > a[i])
            largest = l;
        else
            largest = i;
        if(r < heapSize && a[r] > a[largest])
            largest = r;
        if(largest != i)
        {
            swap(i, largest);
            maxHeapify(largest);
        }
    }

    public void swap(int i, int j)
    {
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    public void buildMaxHeap()
    {
        for(int i = heapSize / 2; i >= 0; i--)
            maxHeapify(i);
    }

    public void heapSort()
    {
        buildMaxHeap();
        for(int i = a.length - 1; i > 0; i--)
        {
            swap(0, i);
            heapSize--;
            maxHeapify(0);
        }
    }

    public void printHeap()
    {
        for(int i = 0; i < heapSize; i++)
            System.out.print(a[i] + " ");
        System.out.println();
    }

    public int heapExtractMax() throws Exception
    {
        if(heapSize < 1)
            throw new Exception("heap underflow");
        int max = a[0];
        a[0] = a[heapSize - 1];
        heapSize--;
        maxHeapify(0);
        return max;
    }

    public void heapIncreaseKey(int i, int key) throws Exception
    {
        if(key < a[i])
            throw new Exception("new key is small than current key");
        a[i] = key;
        while(i > 0 && a[parent(i)] < a[i])
        {
            swap(i, parent(i));
            i = parent(i);
        }
    }

    public void maxHeapInsert(int key) throws Exception
    {
        heapSize++;
        a[heapSize - 1] = Integer.MIN_VALUE;
        heapIncreaseKey(heapSize - 1, key);
    }

    public static void main(String[] args) throws Exception
    {
    /*
        int[] a = {4, 1, 3, 2, 16, 9, 10, 14, 8, 7};
        MaxPriorityQueue queue = new MaxPriorityQueue(a, a.length);
        queue.printHeap();
        queue.buildMaxHeap();
    //  queue.heapSort();
        queue.printHeap();

        System.out.println(queue.heapExtractMax());
        queue.printHeap();
    */
        int[] a = new int[10];
        MaxPriorityQueue queue = new MaxPriorityQueue(a, 0);
        queue.maxHeapInsert(4);
        queue.printHeap();
        queue.maxHeapInsert(1);
        queue.printHeap();
        queue.maxHeapInsert(16);
        queue.printHeap();
        queue.maxHeapInsert(3);
        queue.printHeap();
    }
}


function heap(A) {
    this.heapSize = A.length;
}

function left(i) {
    return 2 * i + 1;
}

function right(i) {
    return 2 * i + 2;
}

function parent(i) {
    return (i - 1) / 2;
}

function max_heapfiy(A, i) {
    var l = left(i);
    var r = right(i);
    if (l < A.length && A[l] > A[i]) {
        largest = l;
    }
    else {
        largest = i;
    }

    if (r < A.length && A[r] > A[largest]) {
        largest = r;
    }

    if (largest != i) {
        swap(A, i, largest);
        max_heapfiy(A, largest);
    }
}

function build_max_heap(A) {
    for (var i = A.length / 2; i >= 0; i--) {
        max_heapfiy(A, i);
    }
}

function heap_increase_key(A, i, key) {
    if (key < A[i]) {
        throw new Error('new key is smaller than current key');
    }

    A[i] = key;

    while (i > 0 && A[parent(i)] < A[i]) {
        swap(A, parent[i], i);
        i = parent(i);
    }
}

heap.prototype.max_heap_insert = function(A, key) {
    this.heapSize += 1;
    A[this.heapSize - 1] = -99999;
    console.log(A);
    heap_increase_key(A, this.heapSize - 1, key);
}

heap.prototype.build_max_heap2 = function (A) {
    this.heapSize = 1;
    for (var i = 1; i < A.length; i++) {
        this.max_heap_insert(A, A[i]);
    }
}

function swap(A, i, j) {
    var tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
}

var arr = [1, 2, 3, 4, 5, 6];
var h = new heap(arr);
h.build_max_heap2(arr);
console.log(arr);


