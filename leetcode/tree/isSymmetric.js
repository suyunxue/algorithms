
// 递归
var isSymmetric = function(root) {
    return isMirror(root, root);
};

function isMirror(r1, r2) {
    if (r1 === null && r2 === null) {
        return true;
    }

    if (r1 === null || r2 == null) {
        return false;
    }
    return (r1.val === r2.val) && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
}

// 迭代
function isSymmetric(root) {
    var q = [];
    q.push(root);
    q.push(root);

    while (q.length) {
        var r1 = q.pop();
        var r2 = q.pop();
        
        if (r1 === null && r2 === null) {
            continue;
        }

        if (r1 === null || r2 === null) {
            return false;
        }

        if (r1.val !== r2.val) {
            return false;
        }

        q.push(r1.left);
        q.push(r2.right);

        q.push(r1.right);
        q.push(r2.left);
    }

    return true;
}

