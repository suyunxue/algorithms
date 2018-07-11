// 参考文章
// https://blog.csdn.net/cyp331203/article/details/43083647
// https://blog.csdn.net/qq_36006553/article/details/52692571
/**
 * p 关键字的概率
 * q 伪关键字的概率
 * n 关键字的数量
 * return 返回最优二叉搜索树的代价和最优根结点
 */
function optionalBst(p, q, n) {
    // 存放回返的两个数组的集合
    var map = {};
    // 用这个二维数组保存e[i][j]最小代价
    var e = new Array(n + 2);
    for (var i = 0; i < n + 2; i++) {
        e[i] = new Array(n + 1);
    }
    // 用这个而为数组保存w[i][j],以避免每次都重新计算
    var w = new Array(n + 2);
    for (var i = 0; i < n + 2; i++) {
        w[i] = new Array(n + 1);
    }

    // root二维数组记录子树的根
    var root = new Array[n + 2];
    for (var i = 0; i < n + 2; i++) {
        root[i] = new Array(n + 1);
    }

    // 初始化e和w数组
    for (var i = 1; i < n + 2; i++) {
        e[i][i - 1] = q[i - 1];
        w[i][i - 1] = q[i - 1];
    }

    for (var l = 1; l < n + 1; l++) {
        for (var i = l; i < n - 1 + 2; i++) {
            var j = i + l - 1;
            e[i][j] = Infinity;
            w[i][j] = w[i][j - 1] + p[j - 1] + q[j];
            for (var r = i; r < j + 1; r++) {
                var t = e[i][r - 1] + e[r + 1][j] + w[i][j];
                if (t < e[i][j]) {
                    e[i][j] = t;
                    root[i][j] = r;
                }
            }
        }
    }

    map[1] = e;
    map[2] = root;
    return map;
}

// 测试代码
// 规模为5的二叉树
var p = [.15, .1, .05, .1, .2];
var q = [.05, .1, .05, .05, .1];
var map = optionalBst(p, q, s);
var e = map[1];
for (var i = 0; i < e.length; i++) {
    for (var j = 0; j < e[i].length; j++) {
        if (e[i][j] > 0) {
            console.log(e[i][j]);
        }
    }
}

function printConstructOptimalBst(root, i, j, r) {
    var rootChild = root[i][j];

    if (rootChild === root[1][5]) {
        console.log('k' + rootChild + '为根');
        printConstructOptimalBst(root, i, rootChild - 1, rootChild);
        printConstructOptimalBst(root, rootChild + 1, j, rootChild);
        return;
    }

    if (j < i - 1) {
        return;
    }
    else if (j === i - 1) {
        if (j < r) {
            console.log('d' + j + '为' + 'k' + r + '的左孩子');
        }
        else {
            console.log('d' + j + '为' + 'k' + r + '的右孩子');
        }

        return ;
    } else { // 这里关键字节点，必为非叶子节点
        if (rootChild < r) {
            console.log('k' + rootChild + '为' + 'k' + r + '的孩子');
        }
        else {
            console.log('k' + rootChild + '为' + 'k' + r + '的右孩子');
        }
    }

    printConstructOptimalBst(root, i, rootChild - 1, rootChild);
    printConstructOptimalBst(root, rootChild + 1, j, rootChild);
}


