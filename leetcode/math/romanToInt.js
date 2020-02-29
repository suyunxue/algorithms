/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        'IV': 3,
        'IX': 8,
        'XL': 30,
        'XC': 80,
        'CD': 300,
        'CM': 800,
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    var sum = map[s[0]];
    for (var i = 1; i < s.length; i++) {
        var oneStr = s[i];
        var twoStr = s.substr(i - 1, 2);
        sum += map[twoStr] ? map[twoStr] : map[oneStr];
    }

    return sum;
};