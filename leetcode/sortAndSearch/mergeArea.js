/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    var merge = [];
    for (var i = 0; i < intervals.length; i++) {
        var L = intervals[i][0];
        var R = intervals[i][1];
        if (merge.length === 0 || merge[merge.length - 1][1] < L) {
            merge.push([L, R]);
        }
        else {
            merge[merge.length - 1][1] = Math.max(merge[merge.length - 1][1], R);
        }
    }

    return merge;
};

var intervals = [[1,3], [2,6], [8,10], [15,18]];
var res = merge(intervals);
console.log(res);