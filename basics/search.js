//二分查找
//注意点就是根据中间值和目标值的相比，来移动头和尾元素
//中间点的位置是每次都在变化，根据头和尾的变化进行改变
//查找到的必须是已经排序好的数组
function binarySearch(arr, num){
	arr.sort();

	var start = 0;
	var end = arr.length - 1;

	while(start <= end){
		var mid = parseInt((start+end)/2);
		if(arr[mid] === num){
			return mid;
		}else if(arr[mid] > num){
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return false;
}