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