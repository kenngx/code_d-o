#include<stdio.h>
#include<conio.h>
using namespace std;

int main()
{
	int n, i, giaiThua = 1;
	do{
	
	printf("xin moi nhap n: ");
	scanf("%d",&n);
}
while(n<0);
	for(i = 1;i<=n;i++)
	giaiThua = giaiThua*i;
	printf("ket qua: %d",giaiThua);
	return 0;
}
