//二叉树的节点
function Node (data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}


function show () {
	return this.data;
}

function show () {
	return this.data;
}

function BST () {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert (data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	}
	else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			}
			else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			} 
		}
	}
}



//遍历二叉查找树

// 中序遍历
// 使用递归
function inOrder (node) {
	if (!(node == null)) {
		inOrder(node.left);
		putStr(node.show() + '');
		inOrder(node.right);
	}
}


//中序遍历测试
//先序遍历
var nums = new BST();
nums.insert(23);
nums.insert(45);
inOrder(nums.root);


//先序遍历
function preOrder (node) {
	if (!(node == null)) {
		putstr(node.show() + '');
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder (node) {
	if (!(node == null)) {
		postOrder(node.left);
	}
	postOrder(node.right);
	putStr(node.show() + '');
}

//查找最小值
//沿着bst的左子树挨个遍历
function getMin () {
	var current = this.root;
	while (!(current.left == null)) {
		current = current.left;
	}
	return current.data;
}


// 最大值，遍历右子树
function getMax () {
	var current = this.root;
	while (!(current.right == null)) {
		current = current.right;
	}
	return current.data;
}
 
//查找给定值
function find (data) {
	var current = this.root;
	while (current != null) {
		if (current.data == data) {
			return current;
		}
		else if (data < current.data) {
			current = current.left;
		}
		else {
			current = current.right;
		}
	}
	return null;
}

function remove (data) {
	root = removeNode(this.root, data);
}

function removeNode (node, data) {
	if (node == null) {
		return null;
	}
	if (data == node.data) {
		//没有子节点的节点
		if (node.left == null && node.right == null) {
			return null;
		}
		//没有左子节点的节点
		if (node.left == null) {
			return node.right;
		}
		//没有右子节点的节点
		if (node.right == null) {
			return node.left;
		}
		//有两个子节点的节点
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}
	else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	}
	else {
		node.right = removeNode(node.right, data);
	}
}

