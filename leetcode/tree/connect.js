/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root == null) {
        return root;
    }

    var q = [];
    q.push(root);

    while (q.length > 0) {
        var size = q.length;

        for (var i = 0; i < size; i++) {
            
            var node = q.shift();

            if (i < size - 1) {
                node.next = q[0];
            }

            if (node.left !== null) {
                q.push(node.left);
            }

            if (node.right !== null) {
                q.push(node.right);
            }

        }
    }

    return root;
};
