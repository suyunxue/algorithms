function optimalBst(p, q, n) {
    // let e[1, n + 1, 0, n];
    // let w[1, n + 1, 0, n];
    // let root = [1, n, 1, n];

    for (var i = 1; i < n + 1; i++) {
        e[i, i - 1] = q[i - 1];
        w[i, i - 1] = q[i - 1];
    }

    for (var l = 1; l < n; l++) {
        for (var j = 1; i < n - l + 1; i++) {
            j = i + l -1;
            e[i, j] = Infinity;
            w[i, j] = w[i, j - 1] + p[j] + q[j];
            for (var r = i; r < j; r++) {
                t = e[i, r - 1] + e[r + 1, j] + w[i, j];
                if (t < e[i, j]) {
                    e[i, j] = t;
                    root[i, j] = r;
                    return e && root;
                }
            }
        }
    }

}