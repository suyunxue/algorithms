//遍历二叉树叶子结点
//在二叉树中遍历算法检测增加结点的左右子树是否都为空
void PreOrderPrintLeaves(BinTree BT)
{
	if(BT)
	{
		if(!BT->left && !BT->Right)
			printg("%d",BT->Data);
		PreOrderPrintLeavers(BT->Left);
		PreOrderPrintLeavers(BT->right);
	}
}
//求树的最大高度
int PostOrderGetHeight(BinTree BT)
{
	int HL , HR, MaxH;
	if(BT)
	{
		HL = PostOrderGetHeight(BT->Left);
		HR = PostOrderGetHeight(BT->right);
		MaxH = (HL>HR) ? HL : HR;//取子树中较大的深度
		return (MaxH+1);//返回深度
	}
}