//层序的基本过程。先根结点入队然后：
//1从队列中取出一个元素 2访问该元素所指结点 3若该元素所指结点的
//左右孩子结点非空，则将其左右孩子的指针顺序入队
void LevelOrderTraversal(BinTree BT)
{
	Queue Q; BinTree T;
	if(!BT)return ;//若是空树则直接返回
	Q = CreatQueue(MaxSize);//创建并初始化队列Q
	AddQ(Q,BT);
	while(!IsEmptyQ(Q)){
		T = DeleteQ(Q);
		printf("%d\n",T->Data);//访问取出队列的结点
		if(T->Left) AddQ(Q,T->Left);
		if(T->Right)AddQ(Q,T->Right);
	}
}