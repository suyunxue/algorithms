function Stack () {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}
function push (element) {
	this.dataStore[this.top++] = element;
}
function pop () {
	return this.dataStore[--this.top];
}
//返回栈顶元素
function peek () {
	return this.dataStore[this.top-1];
}

function length () {
	return this.top;
}
function clear () {
	this.top = 0;
}

//测试代码
var s = new Stack();
s.push('david');
s.push('raymond');
console.log('length:'+s.length());
console.log(s.peek());

//应用数制间的相互转换
function mulBase (num,base) {
	var s = new Stack();
	do {
		s.push(num%base);
		num = Math.floor(num /= base);
	} while (num > 0) ;
	var converted = '';
	while (s.length() > 0) {
		converted += s.pop;
	}
	return converted;
}

//回文数的判断
function isPalindrome (word) {
	var s = new Stack();
	for(var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	}
	var rword = '';
	while (s.length() > 0) {
		rword += s.pop;
	}
	if(word == rword) {
		return true;
	} 
	else {
		return false;
	}
}

//递归演示
function factorial (n) {
	if (n === 0) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}

//使用栈来模拟递归过程
function fact (n) {
	var s = new Stack();
	while (n > 1) {
		s.push(n--);
	}
	var product = 1;
	while (s.length() > 0) {
		product *= s.pop();
	}
	return product;
}

