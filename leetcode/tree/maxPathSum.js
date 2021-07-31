/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    function maxGain(node) {
        if (node === null) {
            return 0;
        }

        let leftGain = Math.max(0, maxGain(node.left));
        let rightGain = Math.max(0, maxGain(node.right));

        let priceNewpath = node.val + leftGain + rightGain;

        maxNum = Math.max(maxNum, priceNewpath);

        return node.val + Math.max(leftGain, rightGain);
    }

    maxGain(root);

    return maxNum;
};
