#include<stdio.h>
//多项式的求导问题，传入系数和指数返回结构体的数组
/*struct typedef POLYNOMIAL{
	int coefficient;
	int index;
	Polynomial *next;
}Polynomial;
void derivaltive(Polynomial *p)
{
	for(;p;p->next)
	{
		p->coefficient = p->coefficient*p->index;
		p->index=p->index-1;
	}

}*/
int main()
{

	int n,e,flag=0;
	printf("请输入你要求导的多项式，按照系数 指数的顺序，指数从大到小排列");
	while(scanf("%d %d",&n,&e)!=EOF)
	{
		if(flag)
		{
			printf(" ");
		}
		else
		{
			flag = 1;
		}
		printf("%d %d\n",n*e,e-1);
	}
	if(flag != 0)
		printf("0 0");
	return 0;


}
