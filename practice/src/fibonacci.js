// 斐波那契树的递归
// num 到40的时候已经很慢了
function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}
