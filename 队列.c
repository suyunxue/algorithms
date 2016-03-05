#define MaxSize
typedef struct{
	ElementType Data[MaxSize];
	int rear;
	int front;
}Queue;
void addQ(Queue *PtrQ,ElementType item)
{
	if((PtrQ->rear+1)%MaxSize == PtrQ->front)
	{
		printf("队列满");
		return;
	}
	PtrQ->rear=(PtrQ->rear+1)%MaxSize;
	return PtrQ->Data[PtrQ->rear]=item ;
}
ElementType DeleteQ(Queue *PtrQ)
{
	if(PtrQ->front==Ptr->rear){
		printf("队列空");
		return ERROR;
	}else{
		PtrQ->front=(PtrQ->front+1)%MaxSize;
		return PtrQ->Data[PtrQ->front];

	}
	
}
typedef struct Node{
	ElementType Data;
	struct Node *Next;
}QNode;
typedef struct{
	QNode *rear;
	QNode *front;

}LinkQueue;
LinkQueue *PtrQ;
//出队列
ElementType DeleteQ(LinkQueue *PtrQ)
{
	Qnode *FrontCell;
	ElementType FrontElem;
	if(PtrQ->front == NULL){
		printf("队列空");
		return ERROR;
	}

	FrontCell = PtrQ->front;
	if(PtrQ->front == PtrQ->rear)
		PtrQ->front=PtrQ->rear=NULL;
	else
		PtrQ->front = PtrQ->front->Next;
	FrontElem = FrontCell->Data;
	free(FrontCell);
	return FrontElem;
}
//多项式加法
Polynomial PolyAdd(Polynomial P1,Polynomial P2)
{
	//把两个多项式每个比较相等就系数相加
	//如果指数大的就复制进去指向下一个小的不变
	//如果指数小则把大的复制进去指向下一个，小的不变
	Polynomial font,rear,temp;
	int sum;
	rear = (Polynomial)malloc(sizeof(PolyNode));
	front = rear;
	while(P1 & P2)
		switch(Compare(P1->expon,P2->expon)){
		case 1:
			Attch(P1->coef,P1->expon,&rear);
			P1=P1->link;
			break;
		case -1:
			Attch(P2->coef,P1->expon,&rear);
			P2=P2->link;
			break;
		case 0:
			sum = P1->coef+P2->coef;
			P1 = P1->link;
			P2 = P2->link;
			break;
	}
	//将未处理完了多项式的所有节点复制到多项式中
	for(;P1;P1=P1->link)
		Attach(P1->coef;P1->expon,&rear);
	for(;P2;P2=P2->link)
		Attach(P2->coef;P2->expon,&rear);
	rear->link = NULL;
	temp = front;
	front = front->link;//令front指向结果多项式的第一个非零项
	free(temp);//释放临时空表头结点
	return front;
}
void Attach(int coef,int expon,Polynomai *PtrRear)
{
	//PtrRear是要添加的末尾指针
	Polynomial P;
	P=(Polynomian)malloc(sizeof(PolyNode));
	P->coef=coef;
	P->expon=expon;
	(*PtrRear)->link=P;//给末尾追加多项式
	*PtrRear = P;//修改末尾指针的值
}











