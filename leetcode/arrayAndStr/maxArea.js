/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
var l = 0; 
var r = height.length - 1;
var ans = 0;
while (l < r) {
    var area = Math.min(height[l], height[r]) * (r - l);
    ans = Math.max(ans, area);
    if (height[l] < height[r]) {
        l++;
    }
    else {
        r--;
    }
}
return ans;
};

var height = [4,3,2,1,4];
var res = maxArea(height);
console.log(res);