/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        else if (s[i] === map[stack[stack.length - 1]]) {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }

    if (stack.length) {
        return false;
    }
    else {
        return true;
    }
};