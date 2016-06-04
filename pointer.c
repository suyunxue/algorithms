#include<stdio.h>
#include<stdlib.h>
int main(void) {
	//动态内存分配,有借有还，换的是原始申请的那个，必须原封不动的还个人家
	int *p = 0;
	int cnt=0;
	while((p=malloc(100*1024*1024))) {
		cnt++;
	}
	printf("分配了%d00MB的空间\n",cnt);
	return 0;
}
