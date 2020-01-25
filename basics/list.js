//我们先来实现一个list类，定义构造函数
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];//初始化一个空数组来保存列表元素
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currpos = currpos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;
	this.print = print;
}
//显示元素
function print (element) {
	console.log(element);
}
//添加元素
function  append (element) {
	this.dataStore[this.listSize++] = element;
}
//查找元素
function find (element) {
	for(var i = 0; i < this.dataStore.length; i++){
		if(this.dataStore[i] === element){
			return i;
		}
	}
	return -1;
}
//删除元素
function remove(element) {
	var foundAt = this.find(element);
	if(foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}
//返回列表中的元素
function length () {
	return this.listSize;
}
//显示列表中的元素
function toString() {
	return this.dataStore;
}
//插入元素
function insert (element,after) {
	var insertPos = this.find(after);
	if(insertPos > -1) {
		this.dataStore.splice(insertPos+1,0,element);
		++this.listSize;
		return true;
	}
	return false;
}
//清空所有的元素
function clear () {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}
// 判读给定值是否在列表中
function contains (element) {
	for(var i = 0; i < this.dataStore.length; ++i) {
		if(this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

//遍历列表
function  front () {
	this.pos = 0;
}
function end () {
	this.pos = this.listSize-1;
}
function prev () {
	if(this.pos > 0) {
		--this.pos;
	}
}
function next () {
	if(this.pos < this.listSize - 1) {
		++this.pos;
	}
}
function currpos () {
	return this.pos;
}
function moveTo (position) {
	this.pos = position;
}
function getElement () {
	return this.dataStore[this.pos];
}
var names = new List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');
print(names.toString())
print(names.getElement());

//使用迭代器遍历,这段代码有问题，会一直迭代，使浏览器卡死
// for(names.front(); names.currpos() < names.length(); names.next) {
// 	print(names.getElement());
// }
