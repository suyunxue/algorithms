/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var current = new Array(n * 2);
    var combinations = [];
    generateAll(current, 0, combinations);
    return combinations;
};

function generateAll(current, pos, result) {
    if (current.length === pos) {
        if (valid(current)) {
            result.push(current.join(''));
        }
    }
    else {
        current[pos] = '(';
        generateAll(current, pos + 1, result);
        current[pos] = ')';
        generateAll(current, pos + 1, result);
    }
}

function valid(current) {
    var balance = 0;
    for (var value of current) {
        if (value === '(') {
            balance++;
        }
        else {
            balance--;
        }

        if (balance < 0) {
            return false;
        }
    }

    return balance === 0;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    backtrack(ans, [], 0, 0, n);
    return ans;
};

function backtrack(ans, cur, open, close, max) {
    if (cur.length === max * 2) {
        ans.push(cur.join(''));
    }
    if (open < max) {
        cur.push('(');
        backtrack(ans, cur, open + 1, close, max);
        cur.pop();
    }
    if (close < open) {
        cur.push(')');
        backtrack(ans, cur, open, close + 1, max);
        cur.pop();
    }
}
