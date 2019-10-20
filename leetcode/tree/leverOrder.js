// 递归写法
var levels = [];

var levelOrder = function (root) {
    if (root === null) {
        return levels;
    }

    helper(root, 0);

    return levels;
};

function helper(node, level) {
    if (levels.length === level) {
        levels.push([]);
    }

    levels[level].push(node.val);

    if (node.left !== null) {
        helper(node.left, level + 1);
    }

    if (node.right !== null) {
        helper(node.right, level + 1);
    }
}

// 迭代写法
var levelOrder = function(root) {
    var levels = [];
    var level = 0;
    var queue = [];

    if (root === null) {
        return levels;
    }
    
    queue.push(root);

    while (queue.length) {
        levels.push([]);
        
        var levelsLen = queue.length;

        for (let i = 0; i < levelsLen; i++) {
            var node = queue.shift();
            levels[level].push(node.val);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        level++;
    }

    return levels;
    
};
