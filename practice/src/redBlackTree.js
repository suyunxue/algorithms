// https://blog.csdn.net/rth362147773/article/details/78014688
// https://segmentfault.com/a/1190000012115424
// 红黑树前端js代码

// let RedBlackTree = (function () {
//     let Colors = {
//         RED: 0,
//         BLACK: 1
//     };

//     class Node {
//         constructor(key, color) {
//             this.key = key;
//             this.left = null;
//             this.right = null;
//             this.color = color;

//             this.flipColor = function () {
//                 if (this.color === Colors.RED) {
//                     this.color = Colors.BLACK;
//                 }
//                 else {
//                     this.color = Colors.RED;
//                 }
//             }
//         }
//     }

//     class RedBlackTree {
//         constructor() {
//             this.root = null;
//         }

//         getRoot() {
//             return this.root;
//         }

//         isRed(node) {
//             if (!node) {
//                 return false;
//             }

//             return node.color === Colors.RED;
//         }

//         flipColors(node) {
//             node.left.flipColor();
//             node.right.flipColor();
//         }

//         rotateLeft(node) {
//             var temp = node.right;
//             if (temp != null) {
//                 node.right = temp.left;
//                 temp.left = node;
//                 temp.color = node.color;
//                 node.color = Colors.RED;
//             }

//             return temp;
//         }

//         rotateRight(node) {
//             var temp = node.left;
//             if (temp !== null) {
//                 node.left = temp.right;
//                 temp.right = node;
//                 temp.color = node.color;
//                 node.color = Colors.RED;
//             }
//             return temp;
//         }

//         insertNode(node, element) {
//             if (node === null) {
//                 return new Node(element, Colors.RED);
//             }

//             var newRoot = node;

//             if (element < node.key) {
//                 node.left = this.insertNode(node.left, element);
//             }
//             else if (element > node.key) {
//                 node.right = this.insertNode(node.right, element);
//             }
//             else {
//                 node.key = element;
//             }

//             if (this.isRed(node.right) && !this.isRed(node.left)) {
//                 newRoot = this.rotateLeft(node);
//             }

//             if (this.isRed(node.left) && this.isRed(node.left.left)) {
//                 newRoot = this.rotateRight(node);
//             }

//             if (this.isRed(node.left) && this.isRed(node.right)) {
//                 this.flipColors(node);
//             }

//             return newRoot;
//         }

//         insert(element) {
//             this.root = this.insertNode(this.root, element);
//             // debugger;
//             console.log(this.root);

//             this.root.color = Colors.BLACK;
//         }

//         // remove(node) {
//         //     while (true) {
//         //         let {left, right, parent, color} = node;

//         //         // 组合1
//         //         if (!left && !right && color === 'red') {
//         //             parent[parent.left === node ? 'left' : 'right'] = null;
//         //             return this;
//         //         }

//         //         // 组合2
//         //         if (!left && !right && color === 'black') {
//         //             if (parent) {
//         //                 let nullNode = new Node(null);
//         //                 nullNode.parent = parent;
//         //                 nullNode.color = ['black', 'black'];
//         //                 parent[parent.left === node ? 'left' : 'right'] = nullNode;
//         //                 this._repairTree(nullNode);
//         //             }
//         //             else {
//         //                 this.root = null;
//         //             }

//         //             return this;
//         //         }

//         //         // 组合4
//         //         if ((!left && right && color === 'black') || (left && !right && color === 'black')) {
//         //             if (parent) {
//         //                 parent[parent.left === node ? 'left' : 'right'] = node.left || node.right;
//         //             }
//         //             else {
//         //                 this.root = node.left || node.right;
//         //             }

//         //             node[node.left ? 'left' : 'rigth'].color = 'black';
//         //             return this;
//         //         }

//         //         // 组合5&6
//         //         if (left && right) {
//         //             // 寻找后继结点
//         //             let successor = right;
//         //             while (successor.left) {
//         //                 successor = successor.left;
//         //             }

//         //             // 用后继结点代替node
//         //             node.value = successor.value;

//         //             // 删除后继结点
//         //             node = successor;

//         //         }

//         //     }
//         // }

//     }

//     return RedBlackTree;
// })();

function Node(value) {
    this.value = value;
    this.color = 'red'; // 结点默认颜色为红色
    this.parent = null;
    this.left = null;
    this.right = null;
}

function RedBlackTree() {
    this.root = null;
}

RedBlackTree.prototype.insert = function (node) {
    // 以二叉搜索树的方式插入结点
    // 如果根结点不存在，则结点作为根节点
    // 如果结点的值小于node，且结点的右子结点不存在，调出循环
    // 如果结点的值大于等于node,且结点的左子结点不存在，跳出循环
    if (!this.root) {
        this.root = node;
    }
    else {
        let current = this.root;
        while (current[node.value <= current.value ? 'left' : 'right']) {
            current = current[node.value <= current.value ? 'left' : 'right'];
        }
        current[node.value <= current.value ? 'left' : 'right'] = node;
        node.parent = current;
    }

    // 判断情形
    this._fixTree(node);
    return this;
}

RedBlackTree.prototype._fixTree = function (node) {
    // 当node.parent不存在时，即为情形1，跳出循环
    // 当node.parent.color === 'black'时，即为情形2，跳出循环
    while (node.parent && node.parent.color !== 'black') {
        // 情形3
        let father = node.parent;
        let grand = father.parent;
        let uncle = grand[grand.left === father ? 'right' : 'left'];
        if (!uncle || uncle.color === 'black') {
            // 叶结点也是黑色的
            // 情形3.1
            let directionFromFatherToNode = father.left === node ? 'left' : 'right';
            let directionFromFatherToFather = grand.left === father ? 'left' : 'right';
            if (directionFromFatherToNode === directionFromFatherToFather) {
                // 具体情形1或2
                // 旋转
                this._rotate(father);
                // 变色
                father.color = 'black';
                grand.color = 'red';
            }
            else {
                // 具体情形三或四
                // 旋转
                this._rotate(node);
                this._rotate(node);

                // 变色
                node.color = 'black';
                grand.color = 'red';
            }

            break; // 完成插入，跳出循环
        }
        else {
            // 情形3.2
            // 变色
            grand.color = 'red';
            father.color = 'black';
            uncle.color = 'black';
            // 将grand设为新的node
            node = grand;
        }
    }

    if (!node.parent) {
        // 如果是情形1
        node.color = 'black';
        this.root = node;
    }
}

RedBlackTree.prototype._rotate = function (node) {
    // 旋转node和node.parent
    let y = node.parent;
    if (y.right === node) {
        if (y.parent) {
            y.parent[y.parent.left === y ? 'left' : 'right'] = node;
        }
        node.parent = y.parent;
        if (node.left) {
            node.left.parent = y;
        }
        y.right = node.left;
        node.left = y;
        y.parent = node;
    }
    else {
        if (y.parent) {
            y.parent[y.parent.left === y ? 'left' : 'right'] = node;
        }
        node.parent = y.parent;
        if (node.right) {
            node.right.parent = y;
        }
        y.left = node.right;
        node.right = y;
        y.parent = node;
    }
}

RedBlackTree.prototype.remove = function (node) {
    while (true) {
        let {left, right, parent, color} = node;
        // 组合1
        if (!left && !right && color === 'red') {
            parent[parent.left === node ? 'left' : 'right'] = null;
            return this;
        }
    }

    // 组合2
    if (!left && !right && color === 'black') {
        if (parent) {
            let nullNode = new Node(null);
            nullNode.parent = parent;
            nullNode.color = ['black', 'black'];
            parent[parent.left === node ? 'left' : 'right'] = nullNode;
            this._repairTree(nullNode);
        }
        else {
            this.root = null;
        }
        return this;
    }

    // 组合4
    if ((!left && right && color === 'black') || (left && !right && color === 'black')) {
        if (parent) {
            parent[parent.left === node ? 'left' : 'right'] = node.left || node.right;
        }
        else {
            this.root = node.left || node.right;
        }
        node[node.left ? 'left' : 'right'].color = 'black';
        return this;
    }

    // 组合5&6
    if (left && right) {
        // 寻找后继结点
        let successor = right;
        while (successor.left) {
            successor = successor.left;
        }

        // 用后继结点代替node
        node.value = successor.value;
        // 删除后继结点
        node = successor;
    }
}

RedBlackTree.prototype._repairTree = function (node) {
    while (node.parent) {
        let father = node.parent;
        let brother = father[father.left === node ? 'right' : 'left'];
        let son = brother[father.left === node ? 'right' : 'left'];
        let daugh = brother[father.left === node ? 'left' : 'right'];
        if (brother.color === 'black') {
            if (son && son.color === 'red') {
                // 情形一
                // 旋转brother和father
                this._rotate(brother);
                // 变色
                brother.color = father.color;
                father.color = 'black';
                son.color = 'black';
                // 移除black
                if (!node.value) {
                    // nullNode
                    father[father.left === node ? 'left' : 'right'] = null;
                }
                else {
                    node.color = 'black';
                }
                // 删除操作完成
                return;
            }
            else if (daugh && daugh.color === 'red') {
                // 情形二
                // 旋转son和brother
                this._rotate(son);
                // 变色
                son.color = 'black';
                brother.color = 'red';
                // 变成情形一，继续循环
            }
            else {
                // 情形三
                // brother无红子结点
                if (father.color === 'red') {
                    // father为红色
                    father.color = 'black';
                    brother.color = 'red';
                    // 移除black
                    if (!node.value) {
                        // nullNode
                        father[father.left === node ? 'left' : 'right'] = null;
                    }
                    else {
                        node.color = 'black';
                    }
                    // 删除操作完成
                    return;
                }
                else {
                    // father为黑色
                    father.color = ['black', 'black'];
                    brother.color = 'red';
                    // 移除black
                    if (!node.value) {
                        // nullNode
                        father[father.left === node ? 'left' : 'right'] = null;
                    }
                    else {
                        node.color = 'black';
                    }
                    node = father;
                    // 结点上移，继续循环
                }
            }
            else {
                // 情形四
                this._rotate(brother);
                brother.color = 'black';
                father.color = 'red';
                // 继续循环
            }
        }
        this.root = node;
        node.color = 'black';
    }
}

RedBlackTree.prototype.find = function (value) {
    let current = this.root;
    while (current.value !== value) {
        current = current[value >= current.value ? 'right' : 'left'];
    }
    return current;
}

let arr = [11, 2, 14, 1, 7, 15, 5, 8, 4];
let tree = new RedBlackTree();
arr.forEach(i => tree.insert(new Node(i)));
let findNode = tree.find(15);
tree.remove(findNode);


// var rbTree = new RedBlackTree();
// rbTree.insert(1);
// rbTree.insert(2);
