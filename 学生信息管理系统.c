#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 100
#define PAGE 6
typedef struct
{  int year;
   int month;
   int day;
}DATE;
typedef struct   /*学生信息结构体*/
{  char name[15];    /*姓名*/
   char sex[5];    /*性别*/
   char hometown[20];    /*籍贯*/ 
   char group[10];    /*民族*/
   DATE birthday;    /*出生年月*/
   char xibie[20];    /*系别*/
   char zhuanye[20];    /*专业*/ 
   int  banji;     /*班级*/
   char num[10];     /*学号*/
   DATE in_time;     /*入学年月*/
}STU;
/*读文件模块*/
int read_file(STU stu[])
{ 
    FILE *fp;
   int i=0;
   if((fp=fopen("student.txt","rt"))==NULL)
   { 
	   printf("\n\n*****文件不存在!请创建!*****");
      return 0;
   }
  while(feof(fp)!=1)
  {   fscanf(fp,"%s%s%s%s%d%d%d%s%s%d%s%d%d%d",stu[i].name,stu[i].sex,stu[i].group,stu[i].hometown,
		&stu[i].birthday.year,&stu[i].birthday.month,&stu[i].birthday.day,stu[i].xibie,
		stu[i].zhuanye,&stu[i].banji,stu[i].num,&stu[i].in_time.year,&stu[i].in_time.month,&stu[i].in_time.day);

   if(stu[i].num[0]=='0')
		 break;
	  else
		  i++;
   }
   fclose(fp);
   return i;   /*返回输入信息的学生的个数*/
}
/*数据储存模块*/
void save_file(STU stu[],int sum)
{  FILE *fp;
   int i;
   if((fp=fopen("student.txt","wt"))==NULL)
   {  printf("读文件错误!\n");
      return;
   }
   for(i=0;i<sum;i++)
   {
	   fprintf(fp,"%s\t%s\t%s\t%s\t%d\t%d\t%d\t%s\t%s\t%d\t%s\t%d\t%d\t%d\n",stu[i].name,stu[i].sex,stu[i].group,stu[i].hometown,stu[i].birthday.year,stu[i].birthday.month,stu[i].birthday.day,stu[i].xibie,stu[i].zhuanye,stu[i].banji,stu[i].num,stu[i].in_time.year,stu[i].in_time.month,stu[i].in_time.day);
   }  
   fprintf(fp,"z z z z 0 0 0 z z 0 0 0 0 0\n");
	   fclose(fp);
}
/*输入模块*/
int input(STU stu[])
{  int i=0;
   char choice;
   system("cls");
   printf("\n\n     录入学生信息(最多%d种)\n",MAX);
   printf("-----------------------------------------\n\n");
   do
   {  printf("\n             第%d个学生信息",i+1);
      printf("\n       姓名:");
	  scanf("%s",stu[i].name);
	  printf("\n       性别:");
	  scanf("%s",stu[i].sex);
	  printf("\n       民族:");
	  scanf("%s",stu[i].group);
	  printf("\n       籍贯:");
	  scanf("%s",stu[i].hometown);
	  printf("\n       出生年月:");
	  scanf("%d-%d-%d",&stu[i].birthday.year,&stu[i].birthday.month,&stu
      [i].birthday.day);
	  printf("\n       系别:");
	  scanf("%s",stu[i].xibie);
	  printf("\n       专业:");
	  scanf("%s",stu[i].zhuanye);
	  printf("\n       班级:");
	  scanf("%d",&stu[i].banji);
	  printf("\n       学号:");
	  scanf("%s",stu[i].num);
	  printf("\n       入学年月:");
	  scanf("%d-%d-%d",&stu[i].in_time.year,&stu[i].in_time.month,&stu[i].in_time.day);
	  i++;
	  printf("是否继续输入?(Y/N)");
	  getchar();   
	  choice=getchar();
         if(choice=='n'||choice=='N')
		 break;
   }while(i<MAX);
   printf("\n---------%d个学生信心输入完毕!---------\n",i);
   printf("           按任意键返回主菜单!\n");
   getchar();
   getchar();
   return i;
}
/*输出模块*/
void output(STU stu[],int sum)
{  
	int i=0,j=0,page=1;
     system("cls");
     printf("\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★");
       printf("\n\n--------学生信息表----第%d页--------\n\n",page);
       printf("姓名---性别---民族---籍贯---出生日期---系别---专业---班级---学号---入学年月\n");
       printf("---------------------------------------------------------------------------\n");
   while(i<sum)
   {  j++;
      if(j%PAGE!=0)
	  {printf(" %s\t%s\t%s\t%s\t%d_%d_%d\t%s\t%s\t%d\t%s\t%d_%d_%d\n",stu[i].name,stu[i].sex,stu[i].group,stu[i].hometown,stu[i].birthday.year,stu[i].birthday.month,stu[i].birthday.day,stu[i].xibie,stu[i].zhuanye,stu[i].banji,stu[i].num,stu[i].in_time.year,stu[i].in_time.month,stu[i].in_time.day);
       printf("--------------------------------------------------------------------------\n");
	}
	  else
	  {   printf("****按任意键继续!****\n");
	      getchar();
       printf("\n\n--------学生信息表----第%d页--------\n\n",++page);
	   printf("姓名---性别---民族---籍贯---出生日期---系别---专业---班级---学号---入学年月\n");
	   printf("---------------------------------------------------------------------------\n");
	   printf(" %s\t%s\t%s\t%s\t%d_%d_%d\t%s\t%s\t%d\t%s\t%d_%d_%d\n",stu[i].name,stu[i].sex,stu[i].group,stu[i].hometown,stu[i].birthday.year,stu[i].birthday.month,stu[i].birthday.day,stu[i].xibie,stu[i].zhuanye,stu[i].banji,stu[i].num,stu[i].in_time.year,stu[i].in_time.month,stu[i].in_time.day);
       printf("--------------------------------------------------------------------------\n");
	  }
	  i++;
   }
   printf("按任意键返回主菜单!");
   getchar();
   getchar();
}
/*添加模块*/
add(STU stu[],int sum)
{   
    int i,n;
	printf("      【添加学生信息!】\n");
    printf("★★★★★★★★★★★★★★★★★★\n");
    printf("请输入您要添加信息的学生的个数:");
	scanf("%d",&n);
	if(n<=MAX-sum)
    {	for(i=sum;i<sum+n;i++)
	{   system("cls");
		printf("请输入您要添加的第%d个学生信息!\n",i-sum+1);
	    printf("------------------------------------------------------");
        printf("\n       姓名:");
	    scanf("%s",stu[i].name);
	    printf("\n       性别:");
	    scanf("%s",stu[i].sex);
	    printf("\n       民族:");
	    scanf("%s",stu[i].group);
	    printf("\n       籍贯:");
	    scanf("%s",stu[i].hometown);
	    printf("\n       出生年月:");
	    scanf("%d-%d-%d",&stu[i].birthday.year,&stu[i].birthday.month,&stu[i].birthday.day);
	    printf("\n       系别:");
	    scanf("%s",stu[i].xibie);
	    printf("\n       专业:");
	    scanf("%s",stu[i].zhuanye);
	    printf("\n       班级:");
	    scanf("%d",&stu[i].banji);
	    printf("\n       学号:");
	    scanf("%s",stu[i].num);
	    printf("\n       入学年月:");
	    scanf("%d-%d-%d",&stu[i].in_time.year,&stu[i].in_time.month,&stu[i].in_time.day);
	    printf("------------------------------------------------------\n");
	}
	    printf("添加%d学生信息完毕!\n",n);
    }
    else
	    printf("最多可添加%d个学生信息",MAX-sum);
	printf("按任意键返回主菜单!");
	getchar();
    getchar();
	return sum+n;
}
/*1.按学号查询*/
void inquire_num(STU stu[],int sum)
{   int i;
	char num1[10];
	printf("请输入学号:");
    scanf("%s",num1);
	for(i=0;i<sum;i++)
    { if(strcmp(num1,stu[i].num)==0)
	{ 
			system("cls");
			printf("\n您要查询的学生信息如下:\n");
	  printf("姓名---性别---民族---籍贯---出生日期---系别---专业---班级---学号---入学年月\n");
      printf("---------------------------------------------------------------------------\n");
      printf(" %s\t%s\t%s\t%s\t%d_%d_%d\t%s\t%s\t%d\t%s\t%d_%d_%d\n",stu[i].name,stu[i].sex,stu[i].group,stu[i].hometown,stu[i].birthday.year,stu[i].birthday.month,stu[i].birthday.day,stu[i].xibie,stu[i].zhuanye,stu[i].banji,stu[i].num,stu[i].in_time.year,stu[i].in_time.month,stu[i].in_time.day);
      printf("--------------------------------------------------------------------------\n");
	}
	}
}
 
/*2.按姓名查询*/
void inquire_name(STU stu[],int sum)
{   int i;
    char name1[15];
	printf("请输入姓名:");
	scanf("%s",name1);
	for(i=0;i<sum;i++)
	{  if(strcmp(name1,stu[i].name)==0)
	{  
			system("cls");
			printf("您要查询的学生信息如下:\n");
	   printf("姓名---性别---民族---籍贯---出生日期---系别---专业---班级---学号---入学年月");
       printf("---------------------------------------------------------------------------\n");
       printf("%s\t%s\t%s\t%s\t%d_%d_%d\t%s\t%s\t%d\t%s\t%d_%d_%d\n",stu[i].name,stu[i].sex,stu[i].group,stu[i].hometown,stu[i].birthday.year,stu[i].birthday.month,stu[i].birthday.day,stu[i].xibie,stu[i].zhuanye,stu[i].banji,stu[i].num,stu[i].in_time.year,stu[i].in_time.month,stu[i].in_time.day);
       printf("--------------------------------------------------------------------------\n");
	}
	}
}   
/*查询学生信息模块*/
void inquire(STU stu[],int sum)
{  int choice;
   do
   { 
   printf("      ****************学生信息查询******************\n");
   printf("                      1.按学号查询\n");
   printf("                      2.按姓名查询\n");
   printf("                      0.返回主菜单\n");
   printf("                     【请选择0-2】\n");
   scanf("%d",&choice);
   switch(choice)
   {   case 1:inquire_num(stu,sum);   break;
       case 2:inquire_name(stu,sum);   break;
	   case 0:     break;
   }
   }while(choice!=0);
   printf("按任意键返回主菜单!\n");
   getchar();
   getchar();
}
/*修改信息模块*/
void modify(STU stu[],int sum)
{   int i,choice,k;
	char num1[10];
	printf("请输入学号:");
    scanf("%s",num1);
	for(i=0;i<sum;i++)
    { if(strcmp(num1,stu[i].num)==0)
	{ printf("原信息如下:\n");
	  printf("姓名---性别---民族---籍贯---出生日期---系别---专业---班级---学号---入学年月\n");
      printf("---------------------------------------------------------------------------\n");
      printf(" %s\t%s\t%s\t%s\t%d_%d_%d\t%s\t%s\t%d\t%s\t%d_%d_%d\n",stu[i].name,stu[i].sex,stu[i].group,stu[i].hometown,stu[i].birthday.year,stu[i].birthday.month,stu[i].birthday.day,stu[i].xibie,stu[i].zhuanye,stu[i].banji,stu[i].num,stu[i].in_time.year,stu[i].in_time.month,stu[i].in_time.day);
      printf("--------------------------------------------------------------------------\n");
      k=i;
	}
	}
	do{
	  printf("        *************修改学生信息***********\n");
	  printf("     ------------------------------------------------\n");
	  printf("                   1.【姓名】\n");
	  printf("                   2.【性别】\n");
	  printf("                   3.【民族】\n");
	  printf("                   4.【籍贯】\n");
	  printf("                   5.【出生年月】\n");
	  printf("                   6.【系别】\n");
	  printf("                   7.【专业】\n");
	  printf("                   8.【班级】\n");
	  printf("                   9.【学号】\n");
	  printf("                  10.【入学年月】\n");
	  printf("                   0.【返回主菜单】\n");
	  printf("                   【请选择0-10】\n");
	  scanf("%d",&choice);
	  switch(choice)
	  {   case 1:printf("\n请输入修改后的姓名:");
                   scanf("%s",stu[k].name);
				   printf("\n修改完毕!\n");   break;
	      case 2:printf("\n请输入修改后的性别:");
                   scanf("%s",stu[k].sex);
				   printf("\n修改完毕!\n");   break;
		  case 3:printf("\n请输入修改后的民族:");
                   scanf("%s",stu[k].group); 
				   printf("\n修改完毕!\n");   break;
		  case 4:printf("\n请输入修改后的籍贯:");
                   scanf("%s",stu[k].hometown);
				   printf("\n修改完毕!\n");   break;
		  case 5:printf("\n请输入修改后的出生年月(xxxx-xx-xx):");
                 scanf("%d-%d-%d",&stu[k].birthday.year,&stu[k].birthday.month,&stu[k].birthday.day); 
				 printf("\n修改完毕!\n");    break;
		  case 6:printf("\n请输入修改后的系别:");
                   scanf("%s",stu[k].xibie);
				   printf("\n修改完毕!\n");    break;
		  case 7:printf("\n请输入修改后的专业:");
                   scanf("%s",stu[k].zhuanye);
				   printf("\n修改完毕!\n");    break;
		  case 8:printf("\n请输入修改后的班级:");
                   scanf("%d",&stu[k].banji);  
				   printf("\n修改完毕!\n");   break;
		  case 9:printf("\n请输入修改后的学号:");
                   scanf("%s",stu[k].num);  
				   printf("\n修改完毕!\n"); 
				   break;
		  case 10:printf("\n请输入修改后的入学年月(xxxx-xx-xx):");
                 scanf("%d-%d-%d",&stu[k].in_time.year,&stu[k].in_time.month,&stu[k].in_time.day); 
				   printf("\n修改完毕!\n");    break;
		  case  0:       break;
	  }
	}while(choice!=0);
}
/*删除信息模块*/
del(STU stu[],int sum)
{   int i,j;
    char num1[10];

         printf("请输入您要删除的学生学号:");
	     scanf("%s",num1);
		 for(i=0;i<=sum;i++)
		 { if(strcmp(num1,stu[i].num)==0)
		  {for(j=i;j<sum-1;j++)
		    stu[j]=stu[j+1];
		    printf("\n该学生信息已删除!\n");
		 }
		 if(i==sum+1)
		 {  printf("\n该学生不存在!");
		 }
		 }
		 printf("   按任意键返回主菜单!");
		 getchar();
		 getchar();
		 return(sum-1);
	}
/*排序模块*/
void sort(STU stu[],int sum)/*按学号升序排序*/
{  int i,j,k;
   STU t;
   for(i=0;i<sum-1;i++)
   {  k=i;
	   for(j=i+1;j<sum;j++)
	  { if(strcmp(stu[k].num,stu[j].num)>0)
	     k=j;
	   }
	   if(k!=i)
	   { t=stu[i];
         stu[i]=stu[k];
		 stu[k]=t;
	   }
   }
   printf("按照学号升序排序如下\n");
   output(stu,sum);

}
/*统计模块*/
count(STU stu[],int sum)
{  int count=0,i;
   char zhuanye_1[20],xibie_1[20],choice;
   int banji_1;
     printf("\n请输入您要统计的系别:");
     scanf("%s",xibie_1);
     printf("\n\n请输入您要统计的专业:");
     scanf("%s",zhuanye_1);
     printf("\n\n请输入您要统计的班级:");
     scanf("%d",&banji_1);
     for(i=0;i<sum;i++)
	 {if((strcmp(stu[i].xibie,xibie_1)==0)&&(strcmp(stu[i].zhuanye,zhuanye_1)==0)&&(stu[i].banji==banji_1))
       count++;
	 }
     printf("\n您要统计的%s系%s专业%d班的人数为:%d\n",xibie_1,zhuanye_1,banji_1,count);
		 
  printf("\n按任意键返回\n");
  getchar();
  getchar();
}
main()
{   STU stu[MAX];
    int choice,sum,zhanghao,mima;
	printf("请输入您的账号!");
	scanf("%d",&zhanghao);
	printf("请输入您的密码!");
	scanf("%d",&mima);
	if(zhanghao==123&&mima==123)
	{sum=read_file(stu);
	getch();
	if(sum==0)
	{  printf("\n****请录入学生信息!****\n");
	   getchar();
	   sum=input(stu);
	}
    
    system("cls");	
	do
	{ 	system("cls");	
	printf("%d",sum);
	  printf("\n\n");
	  printf("          ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆\n");
	  printf("          ----------------------------------------------\n");
	  printf("\t\t\t1.查询学生信息\n");
	  printf("\t\t\t2.浏览学生信息\n");
	  printf("\t\t\t3.修改学生信息\n");
	  printf("\t\t\t4.删除学生信息\n");
	  printf("\t\t\t5.添加学生信息\n");
	  printf("\t\t\t6.统计学生人数\n");
	  printf("\t\t\t7.学生信息排序\n");
	  printf("\t\t\t0.退出系统\n");
	  printf("\t\t\t【请选择(0-7)】\n");
	  printf("          ----------------------------------------------\n");
	  printf("          ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆\n");
	  scanf("%d",&choice);
	  switch(choice)
	  {   case 1:inquire(stu,sum);  break;
	      case 2:output(stu,sum);  break;
		  case 3:modify(stu,sum);  break;
		  case 4:sum=del(stu,sum);  break;
		  case 5:sum=add(stu,sum);  break;
		  case 6:count(stu,sum);   break;
		  case 7:sort(stu,sum);  break;
		  case 8:save_file(stu,sum);  break;
		  case 0:      break;
	  }
	}while(choice!=0);
    save_file(stu,sum);
	}
}
    
