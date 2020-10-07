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