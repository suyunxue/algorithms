//数组测试平台
function CArray (numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	for (var i = 0; i < numElements; i++) {
		this.dataStore[i] = i;
	}
}

function setData () {
	for (var i = 0; i < this.numElements; i++) {
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));		
	}
}

function clear () {
	for (var i = 0; i < this.dataStore; i++) {
		this.dataStore[i] = 0;
	}
}

function insert (element) {
	this.dataStore[this.pos++] = element;
}

function toString () {
	var restr = '';
	for ( var i = 0; i < this.dataStore.length; i++) {
		retstr += this.dataStore[i] + '';
		if (i > 0 & i % 10 == 0) {
			retstr += '\n';
		}
	}
	return retstr;
}

function swap (arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}


function insertion () {
	var temp, inner;
	for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
		
	}
}

//冒泡排序函数
function bubbleSort () {
	var numElements = this.dataStore.length;
	var temp;
	for ( var outer = numElements; out >= 2; outer--) {
		for ( var inner = 0; inner <= outer - 1; inner++) {
			if ( this.dataStore[inner] > this.dataStore[inner+1]) {
				swap(this.dataStore, inner, inner + 1);
			}
		}
	}
}


//选择排序
function selectionSort () {
	var min, temp;
	for ( var outer = 0; outer <= this.dataStore.length-1; outer++) {
		min = outer;
		for ( var inner = outer + 1;
			  inner <= this.dataStore.length-1; inner++) {
			if (this.dataStore[inner] < this.dataStore[min]) {
				min = inner;
			}
			swap(this.dataStore, outer, min);
		}
	}
}

//插入排序
//就是先把第二个元素开始，然后和前面的所有元素比较
//如果比他们小就放在他们的前面，一直放到最前面
function insertionSort () {
	var temp, inner;
	for (var outer = 1; outer <= this.dataStore.length-1; outer++) {
		temp = this.dataStore[outer];
		inner = outer;
		while (inner > 0 && this.dataStore[inner-1] >= temp) {
			this.dataStore[inner] = this.dataStore[inner-1];
			inner--;
		}
		this.dataStore[inner] = temp;
	}
}



//三种基本排序中
// 冒泡的效率最慢
// 选择中等
// 插入最快


//高级排序

// 希尔排序，在插入排序上做的改进
// 希尔排序
// 先进行分组，然后分组进行直接插入排序
function shellsort () {
	for (var g = 0; g < this.gaps.length; g++) {
		for (var i = this.gaps[g]; i < this.dataStore.length; i++) {
			var temp = this.dataStore[i];
			for (var j = i; j >= this.gaps[g] &&
							this.dataStore[j-this.gaps[g]] > temp;
				 j -= this.gaps[g]) {
				this.dataStore[j] = this.dataStore[j - this.gaps[g]];
			} 
			this.dataStore[j] = temp;
		}
	} 
}


//对间隔序列的定义
this.gaps = [5, 3, 1];


// sedgewick算法计算初始间隔的
var n = this.dataStore.length;
var h = 1;
while (h < N/3) {
	h = 3 * h + 1;
}

// 动态计算间隔的希尔排序
function shellsort () {
	var N = this.dataStore.length;
	var h = 1;
	while (h < N/3) {
		h = 3 * h + 1;
	}
	while (h >= 1) {
		for (var i = h; i < N; i++) {
			for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j -= h) {
				swap(this.dataStore, j, j-h);
			}
		}
	}
}

// 自顶上下的归并排序递归算法太深了
// 自底向上的归并排序是非递归或者迭代版本
function mergeSort (arr) {
	if (arr.length < 2) {
		return;
	}
	var step = 1;
	var left, right;
	while (step < arr.length) {
		left = 0;
		right = step;
		while (right + step <= arr.length) {
			mergeArrays(arr, left, left+step, right, right+step);
			left = right + step;
			right = left + step;
		}
		if (right < arr.length) {
			mergeArrays(arr, left, left+step, right, arr.length);
		}
		step *= 2;
	}
}

function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
	var rightArr = new Array(stopRight - startRight + 1);
	var left = new Array(stopLeft - startLeft + 1);
	k = startRight;
	for (var i = 0; i < (rightArr.length - 1); i++) {
		rightArr[i]  =  arr[k];
		k++;
	}
	k = startLeft;
	for (var i = 0; i < (leftArr.length-1); i++) {
		leftArr[i] = arr[k];
		k++;
	}
	rightArr[rightArr.length-1] = Infinity;//哨兵值
	leftArr[leftArr.length-1] = Infinity; //哨兵值
	var m = 0;
	var n = 0;
	for (var k = startLeft; k < stopRight; k++) {
		if (leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[m];
			m++;
		}
		else {
			arr[k] = rightArr[n];
			n++;
		}
	}	 
	print('left array -',leftArr);
	print('right array-',rightArr);                                    	                                       
}

// 以添加归并排序的CArray类
function CArray (numElements) {
	this.dataStore = [];
	this.pos = [];
	this.gaps = [5, 3, 1];
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.setGaps = setGaps;
	this.shellsort = shellsort;
	this.mergeSort = mergeSort;
	this.mergeArrays = mergeArrays;
	for (var i = 0; i < numElements; i++) {
		this.dataStore[i] = 0;
	}
}

function qSort (list) {
	if (list.length == 0) {
		return [];
	}
	var lesser = [];
	var greater = [];
	var pivot = list[0];
	for (var i = 1; i < list.length; i++) {
		if (list[i] < pivot) {
			lesser.push(list[i]);
		} else {
			greater.push(list[i]);
		}
	}
	return qSort(lesser).concat(pivot, qSort(greater));
}
