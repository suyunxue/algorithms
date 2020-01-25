//第一种最简单的方式
function unique1 (arr) {
	var n = [];
	for (var i = 0; i < arr.length; i++) {
		if (n.indexOf(arr[i]) === -1) {
			n.push(arr[i]);
		}
	}	
	return n;
}

//使用hash表进行判断
function unique2 (arr) {
	var n = {}, r = [];
	for (var i = 0; i < arr.length; i++) {
		if (!n[arr[i]]) {
			n[arr[i]] = true; //存入哈希表
			r.push(arr[i]);
		}
	}
	return r;
}

function unique3 (arr) {
	var n = [this[0]];//结果数组
	for (var i = 0; i < arr.length; i++) {

		//如果当前数组中的数字下标不是第一次出现的位置就表示是重复的
		if (arr.indexOf(arr[i]) === i) { //是第一次出现的位置就是没有重复的
			n.push(arr[i]);
		}
	}
}