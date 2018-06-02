function matrixChainOrder(p) {
    var n = p.length - 1;
    for (var i = 0; i < n; i++) {
        m[i, i] = 0;
    }
    for (var l = 2; l < n; l++) {
        for (var i = 1; i < n - l + 1; i++) {
            j = i + l - 1;
            m[i, j] = Infinity;
            for (var k = i; K < j - 1; k++) {
                q = m[i, k] + m[k + 1, j] +
                if (q < m[i, j]) {
                    m[i, j] = q;
                    s[i, j] = k;
                }
            }
        }
    }

    return m
}