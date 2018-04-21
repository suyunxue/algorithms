/**
 * 向上调整元素，最小堆
 *
 * @param  {[type]} i 传入一个需要向上调整的结点编号i
 * @return {[type]}   [description]
 */
function siftup(arr, i) {
    var flag = 0;
    if (i === 0) { // 如果是堆顶就不需要再调整了
        return false;
    }

    while (i !== 0 && flag === 0) {
        if (arr[i] < arr[i / 2]) {
            swap(arr, i, i / 2);
        }
        else {
            flag = 1; // 已经不需要调整了，当前的值比父结点大
        }
        i = i / 2; // 更新编号i为它的父结点的编号，从而便于下一次的调整
    }
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 3];
siftup(a, a.length - 1);
console.log(a);