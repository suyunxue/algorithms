/*
最长回文子串问题
*/

function longestPalindromeOne(str) {
    var startIndex = 0;
    var left = 0;
    var right = 0;
    var len = 0;
    // debugger;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            left = i;
            right = i + 1;
            searchPalindrome(left, right);
        }
        else if (str[i] === str[i + 2]) {
            left = i;
            right = i + 2;
            searchPalindrome(left, right);
        }
    }

    function searchPalindrome(left, right) {
        var step = 1;
        while ((left - step) >= 0
            && (right + step) < str.length
            && str[left - step] === str[right + step]) {
            ++step;
        }

        console.log(right, left);

        var wide = right - left + step * 2 - 1;
        console.log(wide);

        if (len < wide) {
            len = wide;
            startIndex = left - step + 1;
        }
    }

    console.log(startIndex)
    console.log(len)


    return str.substr(startIndex, len);
}

function longestPalindrome(str) {
    var dp = new Array(str.length);
    for (var i = 0; i < str.length; i++) {
        dp[i] = new Array(str.length);
    }
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            dp[i][j] = 0;
        }
    }

    var left = 0;
    var right = 0;
    var len = 0;

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < i; j++) {
            dp[j][i] = (str[i] === str[j] && ((i - j < 2) || dp[j + 1][i - 1]));
            console.log(dp[j][i]);
            if (dp[j][i] && len < i - j + 1) {
                left = j;
                right = i;
                len = i - j + 1;
                console.log('-int', left, right, len);
            }
            console.log('out', left, right, len);
        }
        dp[i][i] = 1;
    }

    console.log('outest', left, right);

    return str.substr(left, right - left + 1);
}


var str = 'eedegfdjdf';

var res = longestPalindrome(str);

console.log(res);