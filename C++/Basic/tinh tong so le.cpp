#include<stdio.h>
#include<conio.h>
using namespace std;

int main()
{
	int a[20], s = 0, n, i,count;
	printf("Nhap so phan tu cua day: ");
	do
	scanf("%d",&n);
	while(n<=0||n>20);
	for(i = 0;i<n;i++)
		{
			printf("a[%d]= ",i+1);
			scanf("%d",&a[i]);
		
		if(a[i]%2!=0)
			s=s+a[i];
		}
		printf("\nDay so vua nhap la: \n");
		for(i = 0;i<n;i++)
		printf("%6d",a[i]);
	printf("\ntong cac so le: %d",s);
	getch();
}
