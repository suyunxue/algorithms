// 散列表对于插入删除和取用数据非常快，但是对于查找效率低

// hashTable类
function HashTable () {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
}

// 将字符串的ascll码值相加
// 这样散列值就是assll码值和除以数组长度的余数
function simpleHash (data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
}

// 将数据存入散列表
function put (data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

function simpleHash (data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}

// 显示散列表中的数据
function showDistro () {
	var n = 0;
	for (var i = 0; i < this.table.length; i++) {
		if (this.table[i] != undefine) {
			print(i + ':' + this.table[i]);
		}
	}
}

//上面计算的散列值有可能一样，会引发碰撞
// 更好的散列函数
// 数组大小是质数，
// 使用霍纳算法，计算散列值
// 先计算各字符的ascll码值，求和每次乘一个质数，我们使用37

function betterHash (string, arr) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; i++) {
		total += H * total + string.charCodeAt(i);
	}
	total  = total % arr.length;
	return parseInt(total);
}

function HashTable () {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
}

function put (data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

function simpleHash (data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	print('hash value :' + data + '->' +total);
	return total % this.table.length;
}

function showDistro () {
	var n = 0;
	for (var i = 0; i < this.tabel.length; i++) {
		if (this.table[i] != undefine) {
			print(i + ':' + this.table[i]);
		}
	}
}

function betterHash (string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; i++) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length - 1;
	}
	return parseInt(total);
}

//测试betterHash函数
var someNames = ['David','Jennifer'];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; i++) {
	hTable.put(someNames[i]);
}

htable.showDistro();


//散列化整数键

// 产生一个9位的键
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStuData (arr) {
	for (var i = 0; i < arr.length; i++) {
		var num = '';
		for (var j = 1; j <= 9; j++) {
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}

// 散列整形键
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStuData (arr) {
	for (var i = 0; i < arr.length; i++) {
		var num = '';
		for (var j = 1; j <= 9; j++) {
			num += Math.floor(Math.random() * 10); 
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}

var numStudnets = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudnets);
getStuData(students);
for (var i = 0; i < students.length; i++) {
	print(students[i].substring(0,8) + " " +
		students[i].substring(9));
}

var hTable = new HashTable();
for (var i = 0; i < students.length; i++) {
	hTable.put(student[i]);
}
hTable.showDistro();

//对散列表排序，从散列表中取值
function put (key, data) {
	var pos = this.betterHash(key);
	this.table[pos] = data;
}

//读取存储在散列表中的数据
function get (key) {
	return this.table[this.betterHash(key)];
}

//测试put和get方法
var pnnumbers = new HashTable();
var name, number;
for (var i = 0; i < 3; i++) {
	putStr('Enter a name (space to quit)');
	name = readline();
	putStr('enter a number');
	number = readline();
}

//碰撞处理

// 开链法
// 在创建存储散裂果的键值饿数组时，
// 调用一个新空数组，将该数组赋给散列表里每个数组元素
// 也就是二维数组
// 即使散列后值相同，被保存在同样的位置，不过他们在第二个数组中的位置不一样

function buildChains () {
	for (var i = 0; i < this.table.length; i++) {
		this.table[i] = new Array();
	}
}

// 测试代码
var hTable = new HashTable();
hTable.buildChains();
var someNames = ['david','Jennifer'];
for (var i = 0; i < someNames.length; i++) {
	hTable.put(someNames[i]);
}
hTable.showDistro();

//考虑到使用多维数组存储数据
function showDistro () {
	var n = 0;
	for (var i = 0; i < this.table.length; i++) {
		if (this.table[i][0] != undefined) {
			print(i + ':' + this.table[i]);
		}
	}
}


//如果数组中第一个单元格有数据了，put就搜索下一个位置。直到能找到放置数据的单元格
//并把数据存储进去
//使用链中两个连续的单元格，第一个用来保存键值，第二个用来保存数据
function put (key, data) {
	var pos = this.betterHash(key);
	var index = 0;
	if (this.table[pos][index] == undefined) {
		this.table[pos][index++] = data;
	}
	index++;
	else {
		while (this.table[pos][index] != undefined) {
			index++;
		}
		this.table[pos][index+1] = data;
	}
}

function get (key) {
	var index = 0;
	var hash = this.betterHash(key);
	if (this.table[pos][index] = key) {
		return this.table[pos][index+1];
	}
	index += 2;
	else {
		while (this.table[pos][index] != key) {
			index += 2;
		}
		return this.table[pos][index+1];
	}
	return undefined;
}



//线性探测法
//探测散列表中下一个位置是否为空
//如果为空就存入，不为空，正则继续检查下一个位置
//数组特别大时，线性探测比开链法好


//在hashTable的构造函数中加下面这一段代码
this.value = [];


function put (key, data) {
	var pos = this.betterHash(key);
	if (this.table[pos] == undefined) {
		this.table[pos] = key;
		this.value[pos] = data;
	}
	else {
		while (this.table[pos] != undefined) {
			pos++;
		}
		this.table[pos] = key;
		this.value[pos] = data;
	}
}


//get方法会先搜索键在散列表中的位置，如果找到就返回数组value中对应位置上的数据
//如果没找到，则循环搜索，知道找到对应的键或者数组中的单元格为undefined
//后者表示该键没有别存入散列表
function get (key) {
	var hash = -1;
	hash = this.betterHash(key);
	if (hash > -1) {
		for (var i = hash; this.table[hash] != undefined; i++) {
			if (this.table[hash] == key) {
				return this.values[hash];
			}
		}
	}
	return undefined;
}

