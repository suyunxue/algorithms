#include<stdio.h>
void main()
{
	int a = 24;
	int b = 16;
	while(a!=b)
	{
		if(a>b){
			a = a - b;
		}else{
			b = b - a;
		}

	}
	printf("%d是最大公约数\n",a);
}