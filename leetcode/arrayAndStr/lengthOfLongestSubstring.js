/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var n = s.length;
    var ans = 0;
    var i = 0;
    var j = 0;
    var hashSet = new Set();
    while (i < n && j < n) {
        if (!hashSet.has(s[j])) {
            hashSet.add(s[j++]);
            ans = Math.max(ans, j - i);
        }
        else {
            hashSet.delete(s[i++]);
        }
    }

    return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var n = s.length;
    var ans = 0;
    var i = 0;
    var j = 0;
    var hashMap = {};
    for (; j < n; j++) {
        if (hashMap[s[j]]) {
            i = Math.max(hashMap[s[j]], i);
        }
        ans = Math.max(ans, j - i + 1);
        hashMap[s[j]] = j + 1;
    }

    return ans;
};

let res = lengthOfLongestSubstring("abcabcbb");
console.log(res);