/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var isPrime = new Array(n);
    isPrime.fill(true);

    for (var i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    var count = 0;
    for (var i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
};