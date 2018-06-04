// https://blog.csdn.net/u013309870/article/details/75193592

var p = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

function buttomUpCut(p) {
    var r = Array.apply(null, Array(p.length + 1)).map(function (item, i) {
        return 0;
    });
    for (var i = 1; i <= p.length; i++) {
        var q = -1;
        for (var j = 1; j <= i; j++) {
            q = Math.max(q, p[j - 1] + r[i - j]);
        }
        r[i] = q;
    }
    console.log(r);
    return r[p.length];
}

console.log(buttomUpCut(p));


function cutMemo(p) {
    var r = new Array(p.length + 1);
    for (var i = 0; i <= p.length; i++) {
        r[i] = -1;
    }
    return cut(p, p.length, r);
}

function cut(p, n, r) {
    var q = -1;
    if (r[n] >= 0) {
        return r[n];
    }
    if (n === 0) {
        q = 0;
    }
    else {
        for (var i = 1; i <= n; i++) {
            q = Math.max(q, cut(p, n - i, r) + p[i - 1]);
        }
    }

    r[n] = q;

    return q;
}

function cut(p, n) {
    if (n === 0) {
        return 0;
    }
    var q = 0;
    for (var i = 1; i <= n; i++) {
        q = Math.max(q, p[i - 1] + cut(p, n - i));
    }

    return q;

}

function fib(n) {
    if (n <= 0) {
        return n;
    }
    var memo = new Array(n + 1);
    memo[0] = 0;
    memo[1] = 1;
    for (var i = 0; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[i];
}

function fib(n) {
    if (n <= 1) {
        return n;
    }

    var memo_i_2 = 0;
    var memo_i_1 = 1;
    var memo_i = 1;
    for (var i = 2; i <= n; i++) {
        memo_i = memo_i_2 + memo_i_1;
        memo_i_2 = memo_i_1;
        memo_i_1 = memo_i;
    }

    return memo_i;
}


function fibcci(n) {
    if (n <= 0) {
        return n;
    }
    var memo = new Array(n + 1);
    for (var i = 0; i <= n; i++) {
        memo[i] = -1;
    }

    return fib(n, memo);
}

function fib(n, memo) {
    if (memo[n] != -1) {
        return memo[n];
    }

    // 如果已经求出了fib(n)的值直接返回，否则将求出的值保存在Memo备忘录中
    if (n < 2) {
        memo[n] = 1;
    }
    else {
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    }

    return memo[n];
}


// 递归方法
// function fib(n) {
//     if (n <= 0) {
//         return 0;
//     }
//     else if (n === 1) {
//         return 1;
//     }
//     else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }


console.log(fibcci(6));

