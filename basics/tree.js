//二叉树的节点
function Node (data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

//用来显示保存在节点中的数据
function show () {
	return this.data;
}·

// 创建一个类，用来表示二叉查找树
function BST () {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

// 用来向书树中加入新节点
// 首先创建一个node对象，将数据传入该对象保存
// 然后检查BST是否有根节点，如果没有那么就是颗新树，该节点就是根节点
// 如果不是根节点，就遍历BST，找到插入的适当位置，该过程类似于遍历链表，
// 用一个变量存储当前节点，一层层地遍历BST
// 
// 查找正确插入点的算法如下
// （1）设根结点为当前节点
// （2）如果待插入数据小于当前节点，则设新的当前节点为原节点的左节点，反之执行第四步
// （3）如果当前的左节点为nul，就将新的节点插入到这个位置，退出循环，反之继续进行下一次循环
// （4）设当前节点为原节点的右节点
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

//计数
//用来记录一组数据集中数据出现的次数
function Node (data, left, right) {
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;
}

//当次数增加时，需要一个新方法更新BST中的节点
function updata (data) {
	var grade = this.find(data);
	grade.count++;
	return grade;
}

function prArray (arr) {
	putStr(arr[0].toString() + '');
	for (var i = 1; i < arr.length; i++) {
		putStr(arr[i].toString() + '');
		if (i % 10 == 0) {
			putStr('\n');
		}
	}
}

function genArray (length) {
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}


//测试记录一组数据集中不同成绩出现的次数
function prArray (arr) {
	putStr(arr[0].toString() + '');
	for (var i = 1; i < arr.length; i++) {
		putStr(arr[i].toString() + '');
		if (i % 10 == 0) { 
			putStr('\n');
		}
	}
}





