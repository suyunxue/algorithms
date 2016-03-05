#include<stdio.h>
void shell_sort(int arr[],int size)
{
	int step,font,temp,k,j;
	for(step=size/2;step>0;step=step/2)
	{
		for(j=step;j<size;j++)
		{
			temp = arr[j];
			for(font=j-step;font>0&&temp<arr[font];font=font-step)
			{
				arr[font+step] = arr[font];
			}
			arr[step+font] = temp;
		}
	}
	for(k=0;k<size;k++)
	{
		printf("%d,",arr[k]);
	}
}
void main()
{
	int arr[] = {1,4,1,6,2,6};
	shell_sort(arr,6);
}