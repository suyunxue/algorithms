#include<stdio.h>
void find(int n,int m,int a);
int x=1,y=1;
int main()
{
	int i,j,t,n,m,a,b[1000];
	scanf("%d",&t);
	for(i=0;i<t;i++)
	{
		scanf("%d %d %d",&n,&m,&a);
		find(n,m,a);
		b[i]=x*y;
	}
	for(i=0;i<t;i++)
	{
		if(i!=t-1)	printf("%d\n",b[i]);
		else        printf("%d",b[i]);
	}
	return 0;
}

void find(int n,int m,int a)
{
	while(n%a!=0)
	{
		n++;
	}
	x=n/a;
	while(m%a!=0)
	{
		m++;
	}
	y=m/a;
}