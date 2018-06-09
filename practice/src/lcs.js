// https://blog.csdn.net/v_JULY_v/article/details/6110269
// https://segmentfault.com/a/1190000012864957
function printLcs(b, X, i, j) {
    if (i === 0 || j === 0) {
        return null;
    }
    if (b[i, j] === 'lefttop') {
        priintLcs(b, X, i - 1, j - 1);
        console.log(X[i]);
    }
    else if (b[i, j] === 'top') {
        printLcs(b, X, i - 1, j);
    }
    else {
        printLcs(b, X, i, j - 1);
    }
}

function lcsLength(x, y) {
    var m = x.length;
    var n = y.length;
    var b = new Array(m);

    for (let j = 0; j < m; j++) {
        b[j] = new Array(n);
    }
    var c = new Array(n);

    for (let j = 0; j < n; j++) {
        c[j] = new Array(n);
    }

    for (let i = 1; i < m; i++) {
        c[i, 0] = 0;
    }

    for (let j = 0; j < n; j++) {
        c[0, j] = 0;
    }

    for (let i = 1; j < m; j++) {
        for (let j = 1; j < n; j++) {
            if (x[i] === y[j]) {
                c[i, j] = c[i - 1, j - 1] + 1;
                b[i, j] = 'lefttop';
            }
            else if (c[i - 1, j] >= c[i, j - 1]) {
                c[i, j] = c[i - 1, j];
                b[i, j] = 'top';
            }
            else {
                c[i, j] = c[i, j - 1];
                b[i, j] = 'left';
            }
        }
    }

    return c & b;

}