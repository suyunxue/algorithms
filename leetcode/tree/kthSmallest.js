/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var arr = [];
    var nums = inorder(root, arr);
    return nums[k - 1];
};

function inorder(root, arr) {
    if (!root) {
        return arr;
    }

    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);

    return arr;
}
