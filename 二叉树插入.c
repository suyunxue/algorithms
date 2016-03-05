#include<stdio.h>
BinTree Insert(ElementType X,BinTree BST)
{
	//先判断这个树是不是为空，空的话就直接用要插入的这个二叉树
//建立一个新的搜索树
	if(!BST){
		BST = malloc(sizeof(struct TreeNode));
		BST->Data = X;
		BST->Left = BST->Right = NULL;
	}else
		//如果不为空就和查找二叉树一样插入到需要的位置
		if(X<BST->Data)
		//用递归实现
		BST->Left = Insert(X,X->Left);//当这个左子树为空的时候就返回来了
		else if(X>BST->Data)
			BST->Right = Insert(X,X->Right);
		//如果插入到相等的话就什么也不做
		return BST;
}
