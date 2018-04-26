function allocateObject() {
    if (free == null) {
        throw new Error('out of space');
    }
    else (x == free) {
        free = x.next;
        return x;
    }
}

function freeObject(x) {
    x.next = free;
    free = x;
}