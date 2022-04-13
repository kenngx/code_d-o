#include<stdio.h>
#include<conio.h>
int main()
{
	 int a, b;
	 printf("xin moi nhap vao a: ");
	 scanf("%d",&a);
	 printf("xin moi nhap vao b: ");
	 scanf("%d",&b);
	 while (a!=b)
	 	if(a>b)
	 		a=a-b;
	 	else
	 	b = b-a;
	 	
	printf("ket qua: %d",a);
}
