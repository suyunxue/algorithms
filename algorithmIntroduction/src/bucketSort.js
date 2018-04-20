/**
 * 桶排序参考文章：http://www.cnblogs.com/ywang1724/p/3946339.html
 */

// 桶排序
// 桶排序是有多个数字在里面，把他们都放在一个桶里面
// 和基数排序有点像我们就把这写数据都按照a的每个数据都必须小于1，然后把数字都放入每个桶里面
// 如何放入呢，这里就有我这里就是首位数字，然后首位数据就是他的桶，然后再用数组进行插入排序
// 1.初始化为小于1的数字
// 2.开始遍历进入桶
// 3.碰到不是空桶就开始插入排序
function bucketSort(arr) {
    var maxNum = 0;
    var curNum = 0;
    var B = new Array(arr.length);
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        maxNum = maxNum < arr[i].toString().length ? arr[i].toString().length : maxNum;
    }

    // 应该除得是最大的
    for (var i = 0; i < len; i++) {
        arr[i] = arr[i] / (Math.pow(10, maxNum));
    }

    console.log(arr);

    for (var i = 0; i < len; i++) {
        var index = Math.floor(arr[i] * 10);
        console.log(index)
        if (B[index]) {

            // 插入排序
            var k = B[index].length - 1;
            while (k >= 0 && B[index][k] > arr[i]) {
                B[index][k + 1] = B[index][k];
                k--;
            }
            B[index][k + 1] = arr[i];
        }
        else {
            B[index] = [];
            B[index].push(arr[i]);
        }
    }

    var res = [];
    // 操作完毕之后把桶里面不为空值的拼接起来
    for (var i = 0; i < B.length; i++) {
        if (B[i]) {
            res = res.concat(B[i]);
        }
    }

    // 恢复正常
    for (var i = 0; i < len; i++) {
        res[i] = res[i] * Math.pow(10, maxNum);
    }

    return res;
}

var arr = [323, 43, 32, 5, 32, 43, 45];
var res = bucketSort(arr);
console.log(res);


