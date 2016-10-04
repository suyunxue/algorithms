//统计一个数字中的二进制中有多少个一
function numOnesInbinary(number){
	var count = 0;
	while(number !== 0){
		if((number & 1) == 1){
			count++;
		}
		number = number >>> 1;
	}

	return count;
}