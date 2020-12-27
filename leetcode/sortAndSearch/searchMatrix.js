function binarySearch(matrix, target, start, vertical) {
    let lo = start;
    let hi = vertical ? matrix.length - 1 : matrix[0].length - 1;
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (vertical) {
            if (matrix[mid][start] > target) {
                hi = mid - 1;
            }
            else if (matrix[mid][start] < target) {
                lo = mid + 1;
            }
            else {
                return true;
            }
        }
        else {
            if (matrix[start][mid] > target) {
                hi = mid - 1;
            }
            else if (matrix[start][mid] < target) {
                lo = mid + 1;
            }
            else {
                return true;
            }
        }
    }
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix === null || target.length === 0) {
        return false;
    }

    let shorterDim = Math.min(matrix.length, matrix[0].length);
    for (let i = 0; i < shorterDim; i++) {
        let verticalFound = binarySearch(matrix, target, i, true);
        let horizontalFound = binarySearch(matrix, target, i, false);
        if (verticalFound || horizontalFound) {
            return true;
        }
    }

    return false;
};

let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 5;
// debugger
let res = searchMatrix(matrix, target);
console.log(res);