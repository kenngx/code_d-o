//Giải phương trình bậc 2
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Giai_PT_B2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Nhap a: ");
            double a = double.Parse(Console.ReadLine());
            Console.WriteLine("Nhap b: ");
            double b = double.Parse(Console.ReadLine());
            Console.WriteLine("Nhap c: ");
            double c = double.Parse(Console.ReadLine());
            double delta = b * b - 4 * a * c;
           if(a==0)
           {
               if(b==0)
               {
                   if(c==0)
                   {
                       Console.WriteLine("Phuong trinh vo so nghiem");
                   }
                   else
                   {
                       Console.WriteLine("Phuong trinh vo nghiem");
                   }
               }
               else
               {
                   Console.WriteLine("Phuong trinh co nghiem duy nhat: x = {0}", -c / b);
               }
           }
            if (delta < 0)
            {
                Console.WriteLine("Phuong trinh vo nghiem");
            }
            else if (delta == 0)
            {
                double x = -b / (2 * a);
                Console.WriteLine("Phuong trinh co nghiem kep x1 = x2 = ", x);
            }
            else
            {
                double x1 = (-b + Math.Sqrt(delta)) / (2 * a);
                double x2 = (-b - Math.Sqrt(delta)) / (2 * a);
                Console.WriteLine("Phuong trinh co 2 nghiem phan biet x1 = {0} va x2 = {1}", x1, x2);
            }
        }
    }
}