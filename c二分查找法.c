//二分查找必须是数组，而且必须是从小到大放置
int BinarySearch(StaticTable *Tbl;ElementType k)
{
	int left ,right,mid,NotFound=-1;
	left=1;
	right=Tbl->Length;
	while(left <= right)
	{
		mid = (left+right)/2;//计算中间的元素坐标
		if(k->Tbl->Element[mid])
			right=mid+1;
		else if(k->Tbl->Element[mid])
			left=mid-1;
		else return mid;//查找到，返回查找到的元素下标
	}
	return NotFound;
}