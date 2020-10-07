 /**
  * @param {number[]} nums
  * @return {number[][]}
  */
 var permute = function (nums) {
     var res = [];
     var output = [];
     for (var num of nums) {
         output.push(num);
     }

     var n = nums.length;
     backtrack(n, output, res, 0);
     return res;
 };

 function backtrack(n, output, res, first) {
     if (n === first) {
         res.push(output);
     }
     for (var i = first; i < n; i++) {
         swap(output, first, i);
         output = output.slice(0);
         backtrack(n, output, res, first + 1);
         swap(output, first, i);
     }
 }

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}