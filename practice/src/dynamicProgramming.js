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

