//如果你发现js的数组很慢，就可以考虑使用链表来替代它
// 设计一个基于对象的链表
function Node (element) {
	this.element = element;
	this.next = null;
}

//提供对链表操作的方法
function LList () {
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
}

//查找结点
function find (item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

//插入节点
function insert (newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

//显示链表元素
function display () {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

//LList类和测试程序
function LList () {
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.display = display;
}

//主程序
var cities = new LList();
cities.insert('Conway','head');
cities.display();

//找到下一个就是要删除的元素的结点
function findPrevious (item) {
	var currNode = this.head;
	while (!(currNode.next == null) && 
		    (currNode.next.element != item)) {
		currNode = currNode.next;
	}
	return currNode;
}

//删除方法了
function remove (item) {
	var prevNode = this.findPrevious(item);
	if (!(prevNode.next == null)) {
		prevNode.next = prevNode.next.next;
	}
}

function LList () {
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}

//测试remove方法
var cities = new LList();
cities.insert('Conway','head');
cities.display();
cities.remove('Carlisle');

//双向链表
//增加previous属性
function Node (element) {
	this.element = element;
	this.next  = null;
	this.previous = null;
}

//插入
function insert (newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}

//从双向链表中删除节点
function remove (item) {
	var currNode = this.find(item);
	if (!(currNode.next == null)) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

//为了反序显示链表中元素的这类任务
//找出了链表中的最后一个节点
function findLast () {
	var currNode = this.head;
	while (!(currNode.next == null)) {
		currNode = currNode.next;
	}
	return currNode;
}

function dispReverse () {
	var currNode = this.head;
	currNode = this.findLast();
	while (!(currNode.previous == null)) {
		print(currNode.element);
		currNode = currNode.previous;
	}
}

//循环列表
function LList () {
	this.head = new Node('head');
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}

//display需要修改要不然会陷入死循环
function display () {
	var currNode = this.head;
	while (!(currNode.next == null) &&
		   !(currNode.next.element == 'head')) {
		print(currNode.next.element);
		currNode = currNode.next;
	}
}




