//统计一个数字中的二进制中有多少个一
//思想是数据在计算机存储中就是以二进制的形式存储的
//所以我们不需要把他先转化为二进制
//我们可以使用掩码的方式，不过掩码你要生成这个数字多少位的掩码
//所以我可以让这个数字与一进行相与，然后再把这个数字进行右移
//要让这个数字无符号右移，所以我们使用的是<<<这种三个右移符号的
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



//这个是对位运算在行最理想的方案了
//发现一个数字在减一之后再与原数进行相与
//然后这个数字只有一位为1的数字变为了0
//就是最低位的一
//根据这个规律得出了这个算法
function numOnesInbinary(number){
	var count = 0;
	while(number !== 0){
		number = (number-1) & number;
		count++;
	}

	return count;
}	
