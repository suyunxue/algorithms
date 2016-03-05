#include<stdio.h>
//二叉搜索树的查找方法这是用递归实现的
Position Find(ElementType X,BinTree BST)
{
	//if树为空就直接返回
	if(!BST)
		return NULL;
	//if不为空则逐个判断如果大于的话就往右递归
	if(X>BST->Data)
		return Find(X,BST->Right);
	//如果小的话就往左子树这边递归
	else if(x<BST->Data)
		return Find(X,BST->Left);
	//如果既不大于又不小于就是相等就返回这个值
	else
		return BST;
}
//但是非递归的函数执行效率高，可将上面的尾递归改为循环结构
Position IterFind(ElementType X,BinTree BST)
{
	//只要不空就一直循环否则返回NULL
	while(BST)
	{
		if(X>BST->Data)
			BST = BST->Right;
		else if(X<BST->Data)
			BST = BST->left;
		else 
			return BST;
	}
	return NULL;
}
//二叉树搜索最小就是只要不为空一直往左走行
Position FindMin(BinTree BST)
{
	if(!BST)
		return NULL;
	//已经找到最后一个左结点了
	else if(!BST->left)
		return BST;
	else return FindMin(BST->left);
}
//查找最大的是一个道理可以用循环来做