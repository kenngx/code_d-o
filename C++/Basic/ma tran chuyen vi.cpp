#include<stdio.h>
#include<conio.h>
using namespace std;
int main()
{
	float a[10][10], t, tg;
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
		 // Tim ma tran chuyen vi 
   for (i = 1; i < n; i++) {
      for (j = 0; j < m; j++) {
         t = a[i][j];
         a[i][j] = a[j][i];
         a[j][i] = t;
      }
   }

   printf("\nMa tran chuyen vi cua ma tran da cho la:\n");
   for (i = 0; i < n; i++) {
      printf("\n");
      for (j = 0; j < m; j++) {
         printf("%6.1f\t", a[i][j]);
      }
   }

			
	return 0;
}
