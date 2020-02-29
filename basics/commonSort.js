//归并排序
//这个排序还是使用递归实现的，把两个数组进行分割然后一直递归
//递归到两个元素归并，然后就这样往回走使用归并排序
//这个第一个用来拆分数据
//不像其他算法归并排序对于不能放入内存中过大的数据集合是一个好的选择
//在一个典型情况下，一个大文件被分隔成多个小文件
//每个小文件可以被读入内存使用一个合适的排序算法排序
//归并算法是稳定的，但不是原地的算法
//时间复杂度为o（nlogn）
function mergeSort(arr){
	var length = arr.length;

	if(length === 1){
		return arr;
	}

	var mid = Math.floor(length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, length);

	return merge(mergeSort(left), mergeSort(right));
}

//这个第二个是用来合并左右数据，将左右有序的数组合并成有序的数组
function merge(left, right){
	var result = [],
	    il = 0,
	    ir = 0;

	while(il < left.length && ir < right.length){
		if(left[il] < right[ir]){
			result.push(left[il++])
		}else {
			result.push(right[ir++]);
		}
	}

	while(il < left.length){
		result.push(left[il++]);
	}

	while(ir < right.length){
		result.push(right[ir++]);
	}

	return result;
}




//插入排序
//它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

//时间复杂度o（n平方）最好o（n）空间复杂度o（1）
//稳定
function inserSort(arr){
	for (var i = 1; i < arr.length; i++){
		if(arr[i] < arr[i-1]){
			var temp = arr[i];
			var j = i;
			while(arr[j] && arr[j-1] > temp){
				arr[j] = arr[j-1];
				j--;
			}
			arr[j] = temp;
		}
	}	
	return arr;
}


//将数据序列分隔成若干个子序列，然后分别在进行插入排序
//待数据中基本有序时再进行，再对全体记录进行插入排序
//分割只对其中然后往后，然后比较交换
//http://bubkoo.com/2014/01/15/sort-algorithm/shell-sort/
//一次插入是稳定的，不同的插入元素的相对位置会发生改变，所以是不稳定的
//复杂度与增量有关 o（n平方） hibbard复杂度为n（n的3/2次方）时间复杂度下届是n*log2n
	function shellSort(arr){
		function swap(arr, i, j){
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}

		var len = arr.length;
		var gap = Math.floor(arr.length/2);

		while(gap>0){
			for(var i = gap; i < len; i+=gap){
				for(var j = i; j>0; j--){
					if(arr[j] < arr[j-gap]){
						swap(arr, j, j-gap);  //只有比前面的小，才有继续往前插入的必要
					}else {
						break;
					}
				}
			}
			gap = Math.floor(gap/2);
		}
		return arr;
	}




//把最大的元素沉到最底下，比较的是相邻元素
//复杂度为o(n的平方)
//稳定排序		
	function bubbleSort(arr){
		var len = arr.length;

		function swap(arr, i, j){
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}

		for (var i = 0; i < len; i++){
			for(var j = 1; j < len-i; j++){
				if(arr[j-1] > arr[j]){
					swap(arr, j-1, j);
				}
			}
		}

		return arr;
	}

	
//优化后的冒泡排序
//有一个标志位，刚进去设置为false
//然后在内部进行交换，如果发生交换就设置为true
//说明有无序的就继续进行
//然后每次把递增的最大值减一
//好处是如果数组有序，在一次循环就可以确定
//不用再进行多余的操作
function bubbleSort(arr){
	var len = arr.length;

	function swap(arr, i, j){
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	var flag = true;
	while(flag){
		flag = false;
		for(var i = 1; i < len; i++){
			if(arr[i-1] > arr[i]){
				swap(arr, i, i-1);
				flag = true;
			}
		}
		len--;
	}

	return arr;
}

//加了边界条件之后的冒泡排序
function bubbleSort(arr) {

	var flag = true;
		if(arr == null || arr.length == 0){
			return ;
		}

		for (var i = 0; i < arr.length; i++){
			flag = true;
			for (var j = 0; j < arr.length - i - 1; j++){
				if (arr[j+1] < arr[j]){
					swap(arr, j, j+1);
					flag = false;     //如果交换说明顺序还不是排好的,则需要继续排序
				}
			}
			if(flag){
				break;
			}
		}

		function swap (arr, i, j){
			var temp  = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}


//简单插入排序算法
function inserSort(arr){
	if(arr == null || arr.length == 0){
		return ;
	}

	for (var i = 0; i < arr.length; i++){
		var data = arr[i];
		var j = i;
		while(j > 0 && arr[j-1] > data){
			arr[j] = arr[j-1];
			j--; 
		}
		arr[j] = data;
	}

	function swap (arr, i, j){
		var temp  = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	return arr;
}