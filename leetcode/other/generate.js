/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ret = [];
    if (numRows === 0) {
        return ret;
    }

    if (numRows === 1) {
        return [[1]];
    }

    let last = [1, 1];
    ret.push([1]);
    ret.push([1, 1]);

    for (let i = 2; i < numRows; i++) {
        last.push(0);
        let cur = last.slice(0);
        for (let j = 1; j <= i; j++) {
            cur[j] = last[j] + last[j - 1];
        }
        ret.push(cur);
        last = cur.slice(0);
    }

    return ret;
};

let res = generate(5);
console.log(res);