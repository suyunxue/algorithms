/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) {
        return [];
    }

    var result = [];
    var nodeQueue = [];
    nodeQueue.push(root);
    nodeQueue.push(null);
    var levelList = [];
    var isOrderLeft = true;

    while (nodeQueue.length > 0) {
        var curNode = nodeQueue.shift();
        if (curNode) {
            if (isOrderLeft) {
                levelList.push(curNode.val);
            } else {
                levelList.unshift(curNode.val);
            }
            if (curNode.left) {
                nodeQueue.push(curNode.left);
            }
            if (curNode.right) {
                nodeQueue.push(curNode.right);
            }
        } else {
            result = result.concat(levelList);
            levelList = [];
            if (nodeQueue.length > 0) {
                nodeQueue.push(null);
            }
            isOrderLeft = !isOrderLeft;
        }
    }

    return result;
};