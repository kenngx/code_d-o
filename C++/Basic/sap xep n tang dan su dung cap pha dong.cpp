#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
using namespace std;

int main()
{
	float *p, tg;
	int i, j, n;
	//nhap phan tu cua day so
	printf("Nhap so phan tu: ");
	do{
		scanf("%d",&n);
	}
	while(n<=0);
	//cap phat dong
	p = (float*) malloc(n * sizeof(float));
	if(p==NULL)
	{
		printf("loi cap phat.");
		getch();
	}
	//nhap gia tri cua phan tu
	for(i = 0; i < n; i++)
		{
		printf("Nhap gia tri cau phan tu thu %d: ",i+1);
		scanf("%f",&p[i]);
	}
	//in ra day truoc khi sap xep 
	printf("\nDay truoc khi sap xep: ");
	for(i = 0; i < n; i++)
		printf("%6.1f",p[i]);
	//sap xep day tang dan
	for(i=0;i<n-1;i++)
		for(j=i+1;j<n;j++)
			if(p[i]>p[j])
			{
				tg = p[i];p[i] = p[j]; p[j] = tg;
			}
		//in ra day da sap xep
		printf("\nDay da sap xep la: \n");
		for(i = 0; i < n; i++)
			printf("%6.1f",p[i]);
	//giai phong bo nho
	free(p);
	
	
	getch();
}
