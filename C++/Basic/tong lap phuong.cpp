#include <stdio.h>
#include <conio.h>
using namespace std;

int abc(int n)
{   int m=n,tong=0;
    while(m!=0)
    {   int k=m%10;
        tong+=k*k*k;
        m/=10;
    }
    if(tong==n) return 1;
    return 0;
}

int main()
{
    for(int i=100;i<=999;i++)
        if(abc(i)) printf("%d\t ",i);
    getch();
}
