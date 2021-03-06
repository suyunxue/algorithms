function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function BinarySearchTree() {
    this.insert = insert;
}

function insert(val) {
    let newNode = new TreeNode(val);
    let insertNode = (node, newNode) => {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                insertNode(node.right, newNode);
            }
        }

    }

    if (!this.root) {
        this.root = newNode;
    }
    else {
        insertNode(this.root, newNode);
    }
}


let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(1);
binarySearchTree.insert(2);

console.log(binarySearchTree);

function helper(root, lower, upper) {
    if (root === null) {
        return true;
    }

    var val = root.val;
    if (lower !== null && val <= lower) {
        return false;
    }

    if (upper !== null && val >= upper) {
        return false;
    }

    if (!helper(root.right, val, upper)) {
        return false;
    }
    
    if (!helper(root.left, lower, val)) {
        return false;
    }

    return true;
}

var isValidBST = function(root) {
    return helper(root, null, null);
};
