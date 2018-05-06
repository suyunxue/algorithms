
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

    function insertNode(node, newNode) {
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



var nodes = [32, 43, 5, 3, 6, 6, 32, 65, 4];
var tree = new Tree();
nodes.forEach(function (val) {
    tree.insert(val);
})
