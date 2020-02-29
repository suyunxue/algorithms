function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}
function enqueue (element) {
	this.dataStore.push(element);
}
function dequeue () {
	return this.dataStore.shift();
}
//读取队首和队尾元素
function front () {
	return this.dataStore[0];
}
function back () {
	return this.dataStore[this.dataStore.length-1];
}
function toString () {
	var retStr = '';
	for(var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + '\n';
	}
	return retStr;
}
//判断是否为空
function empty () {
	if(this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}

var q = new Queue();
q.enqueue('meredith');
console.log(q.toString());

//方块舞的舞伴问题

//存储对象
function Dancer (name,sex) {
	this.name = name;
	this.sex = sex;
}

//将舞者信息从文件中读到程序中来
function getDancers (males,females) {
	var names = read('dancer.txt').split('\n');
	for(var i = 0; i < names.length; ++i) {
		names[i] = names[i].trim;
	}
}

//模拟方块舞
function Queue () {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}
function enqueue (element) {
	this.dataStore.push(element);
}
function dequeue () {
	return this.dataStore.shift();
}
function front () {
	return this.dataStore[0];
}
function back () {
	return this.dataStore[this.dataStore.length-1];
}
function toString () {
	var retStr = '';
	for (var i = 0; i < this.length; ++i) {
		retStr += this.dataStore[i] + '\n';
	}
	return retStr;
}
function empty () {
	if (this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}
function Dancer (name,sex) {
	this.name = name;
	this.sex = sex;
}
function getDancers (males,females) {
	var name = read('dancer.txt').split('\n');
	for (var i = 0; i < names.length; ++i) {
		var dancer = names[i].split('');
		var sex = dancer[0];
		var name = dancer[1];
		if (sex == 'F') {
			femaleDancers.enqueue(new Dancer(name,sex));
		}
		else {
			maleDacers.enqueue(new Dancer(name,sex));
		}
	}
}

function dance (males,females) {
	print('The dance partners are:\n');
	while (!females.empty() && !males.empty()) {
		person = females.dequeue();
		putstr('Female dancer is:' + person.name);
		person = males.dequeue();
		print('and this male dancer is:' + person.name);
	}
	print();
}


//使用对列对数据排序
function distribute (nums, queues, n, digit) {
	for (var i = 0; i < n; i++) {
		if (digit == 1) {
			queues[num[i]%10].enqueue(nums[i]);
		}
		else {
			queues[Math.floor(num[i] / 10)].enqueue(num[i]);
		}
	}
}
function collect (queues, nums) {
	var i = 0;
	for (var digit = 0; digit < 10; i++) {
		while (!queues[digit].empty()) {
			nums[i++]  = queues[digit].dequeue();
		}
	}
}

//优先队列
function Patient (name, code) {
	this.name = name;
	this.code = code;
}

//找出优先级最高的元素删除
function dequeue () {
	var priority = this.dataStore[0].code;
	for (var i = 1; i < this.dataStore.length; i++) {
		if (this.dataStore[i].code < priority) {
			priority = i;
		}
	}
	return this.dataStore.splice(priority,1);
}

function toString () {
	var retStr = '';
	for (var i = 0; i < this.dataStore; i++) {
		retStr += this.dataStore[i].name + 'code:'+this.dataStore[i].code + '\n';
	}
	return retStr;
}






