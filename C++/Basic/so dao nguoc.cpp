#include<stdio.h>
#include<conio.h>

using namespace std;

int main()
{
	float x[20], s = 0;
	int n, i;
	//nhap so phan tu cua day
	printf("nhap so phan tu cua day: ");
	do
	scanf("%d",&n);
	while(n<=0||n>20);
	for(i = 0;i<n;i++)
	{
		//nhap gia tri cua tung phan tu
		printf("Phan tu thu %d: ",i+1);
		scanf("%f",&x[i]);
	}
	//tinh tong cua day so
	for(i=0;i<n;i++)
		s=s+x[i];
	//in ra ket qua
	printf("tong day = %f",s);
	return 0;
}
