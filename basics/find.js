function findMin (arr) {
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

//包含自组织的函数
//只需要把查找到的数据放到前面即可
function seqSearch (arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data) {
			if (i > 0) {
				swap(arr, i, i-1);
			}
			return true;
		}
	}
	return false;
}


//只需要在一定范围外的元素进行交换
function seqSearch (arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data && i > (arr.length * 0.2)) {
			swap(arr, i, 0);
			return true;
		}
		else if (arr[i] == data) {
			return true;
		}
	}
	return false;
}


//二分查找
function binSearch (arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		if (arr[min] < data) {
			lowerBound = mid + 1;
		}
		else if (arr[min] > data) {
			upperBound = mid - 1;
		}
		else {
			return mid;
		}
	}
	return -1;
}


//统计重复值的函数
//原来只是找到的是中间
function count (arr, data) {
	var count = 0;
	var position = binSearch(arr, data);
	if (position > -1) {
		count++;
		for (var i = position-1; i > 0; i--) {
			if (arr[i] == data) {
				count++;
			}
			else {
				break;
			}
		}
		for (var i = position+1; i < arr.length; i++) {
			if (arr[i] == data) {
				count++;
			}
			else {
				break;
			}
		}
	}
	return count;
}