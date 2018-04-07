function randomizedPartition(A, p, r) {
    var i = random(p, r);
    exchange(A, i, r);
    return partition(A, p, r);
}

function randommizedQuicksort(A, p, r) {
    if (p < r) {
        q = randomizedPartition(A, p, r);
        randommizedQuicksort(A, p, q - 1);
        randommizedQuicksort(A, q + 1, r);
    }
}