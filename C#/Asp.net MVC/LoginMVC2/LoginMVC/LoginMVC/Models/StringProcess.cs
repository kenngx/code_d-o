using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Security.Cryptography;
namespace LoginMVC.Models
{
    public class StringProcess
    {
        public string GetMD5 (string strInput)
        {
            string str_md5 = "";
            byte[] arrOut = System.Text.Encoding.UTF8.GetBytes (strInput);
            MD5CryptoServiceProvider my_md5 = new MD5CryptoServiceProvider();
            arrOut = my_md5.ComputeHash(arrOut);
            foreach(byte b in arrOut)
            {
                str_md5 += b.ToString("X2");
            }

            return str_md5;

        }
    }
}