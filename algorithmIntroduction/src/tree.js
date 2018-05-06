
function Tree() {
    var root = null;

    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    this.insert = function (key) {
        var newNode = new Node(key);

        if (root == null) {
            root = newNode;
        }
        else {
            insertNode(root, newNode);
        }

        console.log(root);
    }

    function insertNode( , newNode) {
        if (node.key >= newNode.key) {
            if (node.left == null) {
                node.left = newNode;
            }
            else {
                insertNode(node.left, newNode);
            }
        }
        else {
            if (node.rigth == null) {
                node.right = newNode;
            }
            else {
                insertNode(node.right, newNode);
            }
        }
    }
}

function getSmallest(node) { // 查找最小点
    while (node.left != null) {
        node = node.left;
    }

    return node;
}

function remove(data) {
    root = removeNode(this.root, data); // 将根节点转换
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }

    if (data == node.data) {

        // 如果没有子节点
        if (node.right == null && node.left == null) {
            return null; // 直接将节点设为空
        }

        // 如果没有左子节点
        if (node.left == null) {
            return node.right;
        }

        // 如果没有右子节点
        if (node.right == null) {
            return node.left;
        }

        // 如果有两个节点
        if (node.right != null && node.left != null) {
            var tempNode = getSmallest(node.right); // 查找最小节点
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data); // 依次寻找，最终查找到node.left == null 返回right
            return node;
        }
    }
    else if (data <= node.data) {
        removeNode(node.left, data);
        return node;
    }
    else {
        removeNode(node.right, data);
        return node;
    }
}





var nodes = [32, 43, 5, 3, 6, 6, 32, 65, 4];
var tree = new Tree();
nodes.forEach(function (val) {
    tree.insert(val);
})
