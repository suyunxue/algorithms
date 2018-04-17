/**
 * 基数排序
 * 原理很简单，从低位到高位进行排序
 * 我就从最低位开始排序
 */

var arr = [211, 43, 45, 23, 54, 5, 68];

var count = [];
function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if (count[bucket] == null) {
                count[bucket] = [];
            }
            count[bucket].push(arr[j]);
        }

        console.log(count);
        var pos = 0;
        for (var j = 0; j < count.length; j++) {
            var value = null;
            if (count[j] != null) {
                while ((value = count[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }

    return arr;
}

console.log(radixSort(arr, 3));

