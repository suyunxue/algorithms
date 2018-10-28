function vebTreePredecessor(V, x) {
    if (V.u === 2) {
        if (x === 1 && V.min === 0) {
            return 0;
        }
        else {
            return null;
        }
    }
    else if (V.max != null && x > V.max) {
        return V.max;
    }
    else {
        minLow = vebTreeMinimum(V.cluster[high(x)]);
        if (minLow !== null && low(x) > minLow) {
            offset = vebTreePredecessor(V.cluster[high(x)], low(x));
            return index(high(x), offset);
        }
        else {
            predCluster = vebTreePredecessor(V.summary, high(x));
            if (predCluster === null) {
                if (V.min !== null && x > V.min) {
                    return V.min;
                }
                else {
                    return null;
                }
            }
            else {
                offset = vebTreeMaximum(V.cluster[predCluster]);
                return index(predCluster, offset);
            }
        }
    }
}

function vebEmptyTreeInsert(V, x) {
    V.min = x;
    V.max = x;
}

function vebTreeInsert(V, x) {
    if (V.min === null) {
        vebEmptyTreeInsert(V, x);
    }
    else if (x < V.min) {
        exchange(x, V.min);
        if (V.u > 2) {
            if (vebTreeMinimum(V.cluster[high(x)]) === null) {
                vebTreeInsert(V.summary, high(x));
                vebEmptyTreeInsert(V.cluster[high(x)], low(x));
            }
            else {
                vebTreeInsert(V.cluster[high(x)], low(x));
            }
        }
        if (x > V.max) {
            V.max = x;
        }
    }
}

function vebTreeDelete(V, x) {
    if (V.min === V.max) {
        V.min = null;
        V.max = null;
    }
    else if (V.u === 2) {
        if (x === 0) {
            V.min = 1;
        }
        else {
            V.min = 0;
            V.max = V.min;
        }
    }
    else if (x === V.min) {
        firstCluster = vebTreeMinimum(V.summary);
        x = index(firstCluster, vebTreeMinimum(V.cluster[firstCluster]));
        V.min = x;
        vebTreeDelete(V.cluster[high(x)], low(x));
        if (vebTreeMinimum(C.cluster[high(x)] === null)) {
            vebTreeDelete(V.summary, high(x));
            if (x === V.max) {
                summaryMax = vebTreeMaximum(V.summary);
                if (summaryMax === null) {
                    V.max = V.min;
                }
                else {
                    V.max = index(summaryMax, vebTreeMaximum(V.cluster[summaryMax]));
                }
            }
            else if (x === V.max) {
                V.max = index(high(x), vebTreeMaximum(V.cluster[high(x)]));
            }
        }
    }
}