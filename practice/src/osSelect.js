
function rightRotate() {
    y.size = x.size;
    x.size = x.left.size + x.right.size + 1;
}

function osSelect(x, i) {
    r = x.left.size + 1;
    if (i === r) {
        return x;
    }
    else if (i < r) {
        return osSelect(x.left, i);
    }
    else return osSelect(x.right, i - r);
}

function osRank(T, x) {
    var r = x.left.size + 1;
    y = x;
    while (y != T.root) {
        if (y === y.p.right) {
            r = r + y.p.left.size + 1;
        }
        y = y.p;
    }
    return r;
}
