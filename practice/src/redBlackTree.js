// https://blog.csdn.net/rth362147773/article/details/78014688
// 红黑树前端js代码

let ReadBlackTree = (function () {
    let colors = {
        RED: 0,
        BLACK: 1
    };

    class Node {
        constructor(key, color) {
            this.key = key;
            this.left = null;
            this.right = null;
            this.color = color;

            this.flipColor = function () {
                if (this.color === Colors.RED) {
                    this.color = Colors.BLACK;
                }
                else {
                    this.color = Colors.RED;
                }
            }
        }
    }

    class RedBlackTree {
        constructor() {
            this.root = null;
        }

        getRoot() {
            return this.root;
        }

        isRed(node) {
            if (!node) {
                return false;
            }

            return node.color === Colors.RED;
        }

        flipColors(node) {
            node.left.flipColor();
            node.right.flipColor();
        }

        rotateLeft(node) {
            var temp = node.rigth;
            if (temp !== null) {
                node.right = temp.left;
                temp.left = node;
                temp.color = node.color;
                node.color = Colos.RED;
            }

            return temp;
        }

        rotateRight(node) {
            var temp = node.left;
            if (temp !== null) {
                node.left = temp.right;
                temp.right = node;
                temp.color = node.color;
                node.color = Colors.RED;
            }
            return temp;
        }
    }
})



function leftRotate(T, x) {
    y = x.right;
    x.right = y.left;
    if (x.left !== y.left) {
        y.left.p = x;
    }
    y.p = x.p;
    if (x.p == T.nil) {
        T.root = y;
    }
    else if (x == x.p.left) {
        x.p.left = y;
    }
    else {
        x.p.right = y;
    }
    y.left = x;
    x.p = y;
}