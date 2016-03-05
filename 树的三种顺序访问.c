#include<stdio.h>
//先序遍历，1.访问根节点 
//2.先序遍历其左子数 3.先序遍历其右子数
void PreOrderTraversal(BinTree BT)
{
	if(BT){
	printf("%d",BT->Data);
	PreOrderTraversal(BT->Left);
	PreOrderTraversal(BT->Right);
	}
}

//中序遍历 1.中序遍历其左子树 2.访问根结点 
//3、中序遍历其右子数
void InOrderTraversal(BinTree BT)
{
	if(BT){
		InOrderTraversal(BT->Left);
		printf("%d",BT->Data);
		InOrderTraversal(BT->Right);
	}
}
//后序遍历 1.后序遍历其左子树 2.后序遍历其右子数 3.访问根结点
void PostOrderTraversal(BinTree BT)
{
	if(BT){
		PostOrderTraversal(BT->Left);
		PostOrderTraversal(BT->Right);
		printf("%d",BT->Data);
	}
}
//先序遍历的非递归算法
void InOrderTraversal(BinTree BT)
{
	BinTree T BT;
	Stack s = CreatStack(MaxSize);//创建并初始化堆栈s
	while(T || !IsEmpty(s)){
		while(T){
			Push(S,T);
			T = T->Left;
		}
		if(!IsEmpaty(s)){
			T = Pop(s);//结点弹出堆栈
			printf("%5d",T->Data);//访问打印结点
			T = T->right;//转向右子树
		}
	}
}