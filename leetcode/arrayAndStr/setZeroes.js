/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowArr = [];
    let colArr = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                rowArr.push(row);
                colArr.push(col);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if ((rowArr.indexOf(row) !== -1) || (colArr.indexOf(col) !== -1)) {
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
};

let res = setZeroes([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]);
console.log(res);