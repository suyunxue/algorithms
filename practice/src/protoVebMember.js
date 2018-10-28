function protoVebMember() {
    if (V.u === 2) {
        return V.A[x];
    }
    else {
        return protoVebMember(V.cluster[high(x)], low(x));
    }
}

function protoVebMinimum(V) {
    if (V.u === 2) {
        if (V.A[0] === 1) {
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