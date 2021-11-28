/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    let res = [];
    let lremove = 0;
    let rremove = 0;

    for (let c of s) {
        if (c === '(') {
            lremove++;
        } else if (c === ')') {
            if (lremove === 0) {
                rremove++;
            } else {
                lremove--;
            }
        }
    }

    helper(s, 0, lremove, rremove);

    return res;

    function helper(str, start, lremove, rremove) {
        if (lremove === 0 && rremove === 0) {
            if (isValid(str)) {
                res.push(str);
            }
            return;
        }

        for (let i = start; i < str.length; i++) {
            if (i !== start && str[i] === str[i - 1]) {
                continue;
            }

            if (lremove + rremove > str.length - i) {
                return;
            }

            if (lremove > 0 && str[i] === '(') {
                helper(str.substr(0, i) + str.substr(i + 1), i, lremove - 1, rremove);
            }

            if (rremove > 0 && str[i] === ')') {
                helper(str.substr(0, i) + str.substr(i + 1), i, lremove, rremove - 1);
            }
        }
    }

    function isValid(str) {
        let count = 0;

        for (let s of str) {
            if (s === '(') {
                count++;
            } else if (s === ')') {
                count--;
                if (count < 0) {
                    return false;
                }
            }
        }

        return count === 0;
    }
};

let s = "))";
let res = removeInvalidParentheses(s);
console.log(res)