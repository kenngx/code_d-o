#include<stdio.h>
#include<conio.h>
using namespace std;
int main()
{
	int i, n, giaiThua = 1;

 printf("nhap so de tinh giai thua\n");

 scanf("%d", &n);

 for (i = 1; i <= n; i++)

   giaiThua = giaiThua * i;

 printf("giai thua cua %d = %d\n", n, giaiThua);

 return 0;
	
}
