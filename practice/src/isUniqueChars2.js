/**
 * 确定一个字符串所有字符是否全都不同
 *
 * 只要证明有一个相同就行就返回false,否则返回true
 */

function isUniqueChars2(str) {
    if (str.length > 256) {
        return false;
    }

    var arr = str.split('');
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            return false;
        }

        obj[arr[i]] = true;
    }

    return true;
}

// 还有一种方式使用于java使用位操作
function isUniqueChars2(str) {
    if (str.length > 256) {
        return false;
    }

    var arr = str.split('');

    var checker = 0;
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i].charCodeAt() - 'a'.charCodeAt();
        if ((checker & (1 << val)) > 0) {
            return false;
        }

        checker |= 1 << val;
    }
}