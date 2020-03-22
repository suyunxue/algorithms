/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 从前序遍历和中序遍历得到树
 * 前序遍历 preorder = [3,9,20,15,7]
    中序遍历 inorder = [9,3,15,20,7]
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let map = {};
    let preIndex = 0;

    function help(left, right) {
        if (left === right) {
            return null;
        }

        let rootVal = preorder[preIndex];
        let root = new TreeNode(rootVal);

        preIndex++;

        let index = map[rootVal];

        root.left = help(left, index);
        root.right = help(index + 1, right);

        return root;
    }


    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    return help(0, preorder.length);
};