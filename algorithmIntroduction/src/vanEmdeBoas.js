function protoVebMinimum(v) {
    if (V.u === 2) {
        if (V.A[0] == 1) {
            return 0;
        }
        else if (V.A[1] === 1) {
            return 1;
        }
        else {
            return null;
        }
    }
    else {
        minCluster = protoVebMinimum(V.summary);
        if (minCluster === null) {
            return null;
        }
        else {
            offset = protoVebMinimum(V.cluster[minCluster]);
            return index(minCluster, offset);
        }
    }
}

function protoVebSuccessor(V, x) {
    if (V.u === 2) {
        if (x === 0 && V.A[1] === 1) {
            return 1;
        }
        else {
            return null;
        }
    }
    else {
        offset = protoVebSuccessor(V.cluster[high(x)], low(x));
        if (offset !== null) {
            return index(high(x), offset);
        }
        else {
            succCluster = protoVebSuccessor(V.summary, high(x));
            if (succCluster === null) {
                return null;
            }
            else {
                offset = protoVebMinimum(V.cluster[succCluster]);
                return index(succCluster, offset);
            }
        }
    }
}

function protoVebInsert(V, x) {
    if (V.u === 2) {
        V.A[x] = 1;
    }
    else {
        protoVebInsert(V.cluster[high(x)], low(x));
        protoVebInsert(V.summary, high(x));
    }
}

function vebTreeSuccessor(V, x) {
    if (V.u === 2) {
        if (x === 0 && V.max === 1) {
            return 1;
        }
        else {
            return null;
        }
    }
    else if (V.min != null && x < V.min) {
        return V.min;
    }
    else {
        maxLow = vebTreeaximum(V.cluster[high(x)]);
        if (maxLow !== null && low(x) < maxLow) {
            offset = vebTreeSuccessor(V.cluster[high(x)], low(x));
            return index(high(x), offset);
        }
        else {
            succCluster = vebTreeSuccessor(V.summary, high(x));
            if (succCluster === null) {
                return null;
            }
            else {
                offset = vebTreeMinimum(V.cluster[succCluster]);
                return index(succCluster, offset);
            }
        }
    }
}

