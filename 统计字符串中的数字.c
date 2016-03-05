#include<stdio.h>
void main()
{

}
long fun1(char *str)
{
	int i = 0;
	int k = 0;
	char *p = str;
	while(*p != '\0' && i<8)//×î¶à8Î»
	{
		if(*p >= '0' && *p<='9')
		{
			k = k*10 + *p - '0';
			++i;
		}
		p++;
	}
	return k;
}
