#include<stdio.h>
//Á´Ê½´æ´¢¶þ²æÊ÷
typedef struct TreeNode *BinTree;
typedef BinTree Position;
struct TreeNode{
	ElementType Data;
	BinTree Left;
	BinTree Right;
};
