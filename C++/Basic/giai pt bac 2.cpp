#include<stdio.h>
#include<conio.h>
#include<math.h>
using namespace std;

int main()
{
	int a, b, c, x1, x2, delta;
	printf("Xin moi nhap a: ");
	scanf("%d",&a);
	printf("Xin moi nhap b: ");
	scanf("%d",&b);
	printf("Xin moi nhap c: ");
	scanf("%d",&c);
	
	if(a==0){
		if(b==0){
			if(c==0){
				printf("phuong trinh vo so nghiem.");
			}
			else{
				printf("phuong trinh vo nghiem.");
			}
		}
		else{
			printf("phuong trinh co nghiem: %d",-c/b);
		}
	}
	else{
		delta = (b*b)-(4*a*c);
		x1 = (-b+sqrt(delta))/(2*a);
		x2 = (-b-sqrt(delta))/(2*a);
	
		if(delta<0){
			printf("phuong trinh vo nghiem.");
		}
		else if(delta==0){
			printf("phuong trinh co nghiem kep: %d",-b/(2*a));
		}
		else{
			printf("phuong trinh co nghiem x1 = %d",x1);
			printf("\nphuong trinh co nghiem x2 = %d",x2);
		}
	}
	
	return 0;
}









