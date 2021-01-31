/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var ans = '';
    for (var i = 0; i < s.length; i++) {
        var num = s[i].charCodeAt() - 65 + 1;
        console.log(num)
        ans = ans * 26 + num;
    }

    return ans;
};