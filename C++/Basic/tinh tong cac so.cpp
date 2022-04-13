#include<stdio.h>
#include<conio.h>

using namespace std;

int main()
{
	int n, s = 0, d = 0;
	do{
	printf("xin moi nhap n: ");
	scanf("%d",&n);
}
while(n<0);
	
		for( ;n!=0; )
		{
		s+=n%10;
		n/=10; d++;
}
printf("TBC cac so la: %f",(float)s/d);
		
	return 0;
}
