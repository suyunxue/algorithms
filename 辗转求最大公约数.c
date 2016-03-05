#include<stdio.h>
void main()
{
	int a = 40;
	int b = 24;
    int c = a%b;//完美的程序是要a>b。如果a<b就要把a和b的位置交换
	//要从键盘输入这个两个数这样会更好
	while(c!=0){
		a = b;
		b = c;
		c = a%b;
	}
	printf("%d就是最大公约数\n",b);
}

