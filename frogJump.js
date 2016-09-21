//青蛙从坐标轴原点位置跳，每次只能向正方向和反方向跳，然后根据用户输入的目标位置x跳
//每次跳的必须比上一次步数加1

function jump (x) {
	var num = 0;
	var n = 1; //跳的步数
	var p = 1; //p是具体跳的方向步数

	while(num !== x){
		num = num + p;
		n++;
		p = Math.pow(-1, n-1) * n; 
		console.log(p);
	}
	return n-1;
}
