/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    for (var i = 0; i < s.length; i++) {
        var len1 = expandAroundCenter(s, i, i);
        var len2 = expandAroundCenter(s, i, i + 1);
        var len = Math.max(len1, len2);
        if (len > (end - start)) {
            start = i - parseInt((len - 1) / 2, 10);
            end = i + parseInt(len / 2, 10);
        }
    }

    return s.slice(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
        left--;
        right++;
    }

    return right - left - 1;
};



// 马拉车算法
var preProcess = function (s) {
    if (s.length === 0) {
        return '^$';
    }
    var ret = '^';
    for (var i = 0; i < s.length; i++) {
        ret += '#' + s[i];
    }

    ret += '#$';
    return ret;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var t = preProcess(s);
    // debugger
    var n = t.length;
    var p = new Array(n).fill(0);
    var C = 0;
    var R = 0;

    for (var i = 1; i < n - 1; i++) {
        var iMirror = 2 * C - i;
        if (R > i) {
            p[i] = Math.min(R - i, p[iMirror]);
        }
        else {
            p[i] = 0;
        }

        while (t[i + 1 + p[i]] === t[i - 1 - p[i]]) {
            p[i]++;
        }

        if (i + p[i] > R) {
            C = i;
            R = i + p[i];
        }
    }

    var maxLen = 0;
    var centerIndex = 0;
    for (var i = 1; i < n - 1; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }

    var start = (centerIndex - maxLen) / 2;
    return s.slice(start, start + maxLen);
};