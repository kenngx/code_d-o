#include<stdio.h>
#include<conio.h>
using namespace std;
int main()
{
	float a[10][10], max, tg;
	int m, n, i, j;
	//nhap so hang va cot cua ma tran
		printf("nhap so hang va cot cua ma tran: ");
	do
		scanf("%d%d",&m,&n);
	while (m<=0||m>10||n<=0||n>10);
	//nhap gia tri cua tung phan tu
	for(i = 0; i<m;i++)
		for(j=0;j<n;j++)
		{
			printf("a[%d][%d]= ",i+1,j+1);
			scanf("%f",&tg);a[i][j];
		}
		//in ra ma tran vua nhap
		printf("\nMa tran vua nhap la: \n");
		for(i=0;i<m;i++)
			{
			for(j=0;j<n;j++)
				printf("%6.1f",a[i][j]);
				printf("\n");
		}
		//tim max;
		max=a[0][0];
		for(i=0;i<m;i++);
			for(j=0;j<n;j++)
				if(a[i][j]>max)max = a[i][j];
		printf("so lon nhat la: %6.1f",max);
			
	return 0;
}
