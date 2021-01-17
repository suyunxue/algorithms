/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function rserialize(root, str) {
    if (root === null) {
        str += 'None,';
    } else {
        str += root.val + ',';
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }

    return str;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    return rserialize(root, '');
};

function rdeserialize(data) {
    if (data[0] === 'None') {
        data.shift();
        return null;
    }

    var root = new TreeNode(data[0]);
    data.shift();
    root.left = rdeserialize(data);
    root.right = rdeserialize(data);

    return root;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    var dataArray = data.split(',');
    return rdeserialize(dataArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */