//删除结点的过程、跟前面一样还是返回的是树
BinTree Delete(ElementType X,BinTree BST)
{
	//删除的时候注意有四种情况
	//1删除结点为空的话
	Position Tmp;//要定位的那个值
	if(!BST) printf("要删除的结点没找到");
	else if(X< BST->Data)//先找到要删除的那个数据
		BST->Left = Delete(X,BST->Left);
	else if(X>BST->Data)
		BST->Right = Delete(X,BST->Right);
	else//找到要删除的结点之后分为三种情况
		//第一种要删除的是左右子结点都有的结点
		if(BST->Left && BST->Right)
		{
			//左右结点都存在的话就是用右边最小的元素填充删除结点
			Tmp = FindMin(BST->Right);
			BST->Data = Tmp->Data;
			BST->Right = Delete(BST->Data,BST->Right);//在删除结点的右子树中删除最小元素
		}
	//剩下的是被删除的结点有一个或无子结点
		else{
			Tmp = BST;
			if(!BST->Left)//有有孩子货无子结点
				BST = BST->Right;
			else if(!BST->Right)//有左孩子或无子结点
				BST = BST->Left;
			//最后删除完之后要释放掉原先申请的空间
			free(Tmp);
		}
		return BST;


}