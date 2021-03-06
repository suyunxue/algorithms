// set类的实现
function Set () {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
}


//添加之前先判断数据存在不存在
function add (data) {
	if (this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	}
	else {
		return false;
	}
}


function remove (data) {
	var pos = this.dataStore.indexOf(data);
	if (pos > -1) {
		this.dataStore.splice(pos,1);
		return true;
	}
	else {
		return false;
	}
}

function show () {
	return this.dataStore;
}

//union会执行并集操作
function contains (data) {
	if (this.dataStore.indexOf(data) > -1) {
		return true;
	}
	else {
		return false;
	}
}

function union (set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = 0; i < set.dataStore.length; i++) {
		if (!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
}

// 交集
function intersect (set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		if (set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

//子集
//先判断两个子集的大小
function subset (set) {
	if (this.size() > set.size()) {
		return false;
	}
	else {
		for each (var member in this.dataStore) {
			if (!set.contains(number)) {
				return false;
			}
		}
	}
	return true;
}



//返回那些属于第一个集合但不属于第二个集合的成员
function difference (set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; i++) {
		if (!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}
