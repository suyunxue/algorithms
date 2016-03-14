

//斐波那契数列
function recurFib (n) {
	if (n < 2) {
		return n;
	}
	else {
		return recurFib(n-1) + recurFib(n-2);
	}
}



//使用了动态规划，用数组val保存了中间结果
//效率比递归高
function dynFib () {
	var val = [];
	for (var i = 0; i <= n; i++) {
		var[i] = 0;
	}
	if (n == 1 || n == 2) {
		return 1;
	}
	else {
		va1[1] = 1;
		val[2] = 2;
		for (var i = 3; i <= n; i++) {
			val[i] = val[i-1] + val[i-2];
		}
		return val[n-1];
	}
}


// 迭代版本计算斐波那契数列
// 和动态规划版本一样
function iterFib (n) {
	var last = 1;
	var nextLast = 1;
	var result = 1;
	for (var i = 2; i < n; i++) {
		result = last + nextLast;
		nextLast = last;
		last = result;
	}
	return result;
}

// 最长公共子串
function lcs (word1, word2) {
	var max = 0;
	var index = 0;
	var lcsarr = new Array(word1.length + 1);
	for (var i = 0; i <= word1.length + 1; i++) {
		lcsarr[i] = new Array(word2.length + 1);
		for (var j = 0; j <= word2.length+1; j++) {
			lcsarr[i][j] = 0;
		}
	}
	for (var i = 0; i <= word1.length; i++) {
		for (var j = 0; j <= word2.length; j++) {
			if (i == 0 || j == 0) {
				lcsarr[i][j] = 0;
			} else {
				if (word1[i - 1] == word2[j - 1]) {
					lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
				} else {
					lcsarr[i][j] = 0;
				}
			}
			if (max < lcsarr[i][j]) {
				max = lcsarr[i][j];
				index = i;
			}
		}
	}
	var str = '';
	if (max == 0) {
		return '';
	} else {
		for (var i = index - max; i <= max; i++) {
			str += word2[i];
		}
		return str;
	}
}

//背包问题
function max (a, b) {
	return (a > b) ? a : b;
}

//递归解决问题
function knapsack (capacity, size; value, n) {
	if (n == 0 || capacity == 0) {
		return 0;
	}
	if (size[n - 1] > capacity) {
		return knapsack(capacity, size, value, n-1);
	} else {
		return max(value[n - 1] +
					knapsack(capacity - size[n - 1], size, value, n - 1),
					knapsack(capacity, size, value, n - 1));
	}
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
print(knapsack(capacity, size, value, n));


//背包问题，动态规划方案
function max (a, b) {
	return (a > b) ? a : b;
}

//一个小背包
//一个是尺寸
//一个是价值
//运行之后，显示存储在表中的值

function dknapsack (capacity, size, value, n) {
	var k = [];
	for (var i = 0; i <= capacity + 1; i++) {
		k[i] = [];
	}
	for (var i = 0; i <= n; i++) {
		for (var w = 0; w <= capacity; w++) {
			if (i == 0 || w == 0) {
				k[i][w] = 0;
			}
			else if (size[i - 1] <= w) {
				k[i][w] = max(value[i - 1] + k[i-1][w-size[i-1]],
							 k[i-1][w]);
			} else {
				k[i][w] = k[i - 1][w];
			}
			putStr(k[i][w] + "");
		}
		putStr(k[i][w]+'');
	}
	return k[n][capacity];
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
print(dknapsack(capacity, size, value, n));



//贪心算法找零问题
function makeChange (origAmt, coins) {
	var remainAmt = 0;
	if (origAmt % .25 < origAmt) {
		coins[3] = parseInt(origAmt / .25);
		remainAmt = origAmt % .25;
		origAmt = remainAmt;
	}
	if (origAmt % .1 < origAmt) {
		coins[2] = parseInt(origAmt / .1);
		remainAmt = origAmt % .1;
		origAmt = remainAmt;
	}
	if (origAmt % .05 < origAmt) {
		coins[1] = parseInt(origAmt / .05);
		remainAmt = origAmt % .05;
		origAmt = remainAmt;
	}
	coins[0] = parseInt(origAmt / .01);
}

function showChange (coins) {
	if (coins[3] > 0) {
		print("25美分的数量-" + coins[3] + '-' + coins[3] * .25);
	}
	if (coins[2] > 0) {
		print('10美分的数量-' + coins[2] + '-' + coins[2] * .10);
	}
	if (coins[1] > 0) {
		print("5美分的数量-" + coins[1] + '-' + coins[1] * .05);
	}
	if (coins[0] > 0) {
		print('1美分的数量-' + coins[0] + '-' + coins[0] * .01);
	}
}

var origAmt = .63;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);




//贪心算法无法解决离散物品

// 1.背包的容量为W，物品的价格为v，重量为w
// 2.根据v/w的比率对物品排序
//3. 按比率的降序方式来考虑物品
//尽可能多个放入每个物品
//以下算法解决部分背包问题

function ksack (value, weights, capacity) {
	var load = 0;
	var i = 0;
	var w = 0;
	while (load < capacity && i < 4) {
		if (weights[i] <= (capacity-load)) {
			w += values[i];
			load += weights[i];
		}
		else {
			var r = (capacity-load)/weights[i];
			w += r * value[i];
			load += weights[i];
		}
		i++;
	}
	return w;
}

var items = ['A','B','C','D'];  //物品
var values = [50, 140, 60, 60];	  //价格
var weights = [5, 20, 10, 12];	//尺寸
var capacity = 30;    
print(ksack(values, weights, capacity)); //显示220
