#include<stdio.h>
#include<malloc.h>
int max_sub1(int a[],int size);
int max_sub2(int a[],int size);
int main()
{
	//存储输入个数的变量
	int k = 0 ;
	int i = 0;
	int max = 0;
	//存储输入个数要存储元素的容器
	int *data = NULL ;
	printf("请输入要输入的元素个数k\n");
	scanf("%d\n",&k);

	data = (int*)malloc(sizeof(int)*k);
	for(i=0;i<k;i++)
	{
		scanf("%d\n",data+i);
	}
    max = max_sub1(data,k);
	printf("%d",max);
	free(data);


}
//穷举法
int max_sub1(int a[],int size)
{
	int i,j,v;
	int max=a[0];
	for(i=0;i<size;i++)
	{
		v=0;
		for(j=i;j<size;j++)
		{
			v=v+a[i];
			if(v>max)
				max=v;
		}
	}
	return max;
}
//动态规划
int max_sub2(int a[],int size)
{
	int i=0,max=0,temp_sum=0;
	for(i=0;i<size;i++)
	{
		temp_sum+=a[i];
		if(temp_sum>max)
			max=temp_sum;
		else if(temp_sum<0)
			temp_sum=0;
	}
		 return max;
}