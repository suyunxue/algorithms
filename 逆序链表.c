#include<stdio.h>
void main()
{
	
}
ptr reverse(ptr head,int k)
{
	int count = 1;
	new = head->next;
	old = new->next;
	while(count < k)
	{
		tmp = old->next;
		old->next = new;
		new = old;
		old = tmp;
		count++;
	}
	head->next->next = old;	
	return new ;
}