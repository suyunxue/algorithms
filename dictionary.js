//字典数据结构，以键-值对形式存储数据
function Dictionary () {
	this.dataStore = new Array();
}

function add (key, value) {
	this.dataStore[key] = value;
}

function find (key) {
	return this.dataStore[key];
}

//delete会删除键和与其相关的值
function remove (key) {
	delete this.dataStore[key];
}

// Object.keys(obj)返回参数obj可被枚举的属性
function showAll () {
	for (var key in Object.keys(this.dataStore)) {
		print(key + "->" + this.dataStore[key]);
	}
}

//字典类
function Dictionary () {
	this.add = add;
	this.dataStore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}

function count () {
	var n = 0;
	for (var key in Object.keys(this.dataStore)) {
		++n;
	}
	return n;
}

//当键的类型为length的时候，length属性就不管用了
var arr = [];
arr['david'] = 1;
alert(arr.length)
