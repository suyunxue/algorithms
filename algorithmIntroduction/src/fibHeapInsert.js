
function fibonacciHeap() {
    var size;
    var minNode;

    function Node(key) {
        var size;
        var minNode;
        var degree;
        var mark;
        var parent;
        var children;
        this.key = key;
        left = this;
        right = this;
        this.insertLeftOf = function (node) {
            left = node.left;
            right = node;
            node.left.right = this;
            node.left = this;
        }
    }

    function insert(data) {
        if (data == null) {
            throw new error('不能插入null值');
        }
        var node = new Node(data);
        if (minNode == null) {
            minNode = node;
        }
        else {
            node.insertLeftOf(minNode);
            if (data.compareTo(minNode.data) < 0) {
                minNode = node;
            }
        }
        size++;
    }

}

function fibHeapUnion(H1, H2) {
    var H = makeFibHeap();
    H.min = H1.min;
    if (H1.min == null || H2.min !== null && H2.min.key < H1.min.key) {
        H.min = H2.min;
    }

    H.n = H1.n + H2.n;

    return H;
}

function union(heap1, heap2) {
    var heap = new fibHeap();
    heap.size = heap1.size + heap2.size;
    heap.minNode = heap1.minNode;
    if (heap1.minNode == null || heap2.minNode !== null && heap2.minNode.data.compareTo(heap1.minNode.data) < 0) {
        heap.minNode = heap2.minNode;
    }

    return heap;
}

function fibHeapExtractMin(H) {
    var z = H.min;
    if (z != null) {
        for (let x of z) {
            // add x to the root list of H;
            x.p = null;
        }
        // remove z from the root list of H
        if (z === z.right) {
            H.min = null;
        }
        else {
            H.min = z.right;
            // consoliDate(H);
        }
        H.n = H.n - 1;
    }
    return z;
}

function consoliDate(H) {
    let A = new Array(0, D(H.n));
    for (i = 0; i < D(H.n); i++) {
        A[i] = null;
    }
    for (let w = 0; w < H; w++) {
        x = w;
        d = x.degree;
        while (A[d] != null) {
            y = A[d];
            if (x.key > y.key) {
                echange(x, y);
            }
            fibHeapLink(H, y, x);
            A[d] = null;
            d = d + 1;
        }
        A[d] = x;
    }
    H.min = null;
    for (let i = 0; i < D(H.n); i++) {
        if (A[i] !== null) {
            if (H.min === null) {
                // create a root list for H containing just A[i]
                H.min = A[i];
            }
            else {
                // insert A[i] into H root list
                if (A[i].key < H.min.key) {
                    H.min = A[i];
                }
            }
        }
    }
}

function fibHeapLink(H, y, x) {
    // remove y from the root list of H
    // make y a child of x, incrementing x.degree
    y.mark = false;
}

function fibHeapDecreashKey(H, x, k) {
    if (k > x.key) {
        // error 'new key is greater than current key'
    }
    x.key = k;
    y = x.p;
    if (y != null && x.key < y.key) {
        cut(H, x, y);
        cascadingCut(H, y);
    }
    if (x.key < H.min.key) {
        H.min = x;
    }
}
function cut(H, x, y) {
    // remove x from the child list of y, decrementing y.degree
    // add x to the root list of H
    x.p = null;
    p.mark = false;
}
function cascadingCut(H, y) {
    z = y.p;
    if (z != null) {
        if (y.mark == false) {
            y.mark = true;
        }
        else {
            cut(H, y, z);
            cascadingCut(H, z);
        }
    }
}

function fibHeapDelete(H, x) {
    fibHeapDecreashKey(H, x, -Infinity);
    fibHeapExtractMin(H);
}

function pisanoDelete(H, x) {
    if (x == H.min) {
        fibHeapExtractMin(H);
    }
    else if (y === x.p) {
        if (y !== null) {
            cut(H, x, y);
            cascadingCut(H, y);
        }
        // add x child list to the root list of H
        // remove x from the root list of H
    }
}