/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];
    helper(root, res);
    return res;
};
var helper = function (root, res) {
    if (root) {
        if (root.left) {
            helper(root.left, res);
        }
        res.push(root.val);
        if (root.right) {
            helper(root.right, res);
        }
    }
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var stack = [];
    var res = [];
    var curr = root;
    while (curr !== null || stack.length) {
        while (curr) {
            stack.push(curr.val);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};