using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using ExcelUploadReadDataSaveExampleCore.Models;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ExcelUploadReadDataSaveExampleCore.Controllers
{
    public class SearchController : Controller
    {
        
        SqlCommand com = new SqlCommand();
        SqlDataReader dr;
        SqlConnection con = new SqlConnection();
        List<Student> students = new List<Student>();
        private readonly ILogger<SearchController> _logger;

        public SearchController(ILogger<SearchController> logger)
        {
            _logger = logger;
            
        }


        public IActionResult Index()
        {
           FetchData();
            return View(students);
        }
        private void FetchData()
        {
            if(students.Count > 0)
            {
                students.Clear();
            }
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT TOP (1000) [ID],[MST],[TenDN],[NCC],[NgayCap],[Status],[Note] FROM [LoginAndImport].[dbo].[Student]";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    students.Add(new Student() 
                    {ID = dr["ID"].ToString()
                    ,MST = dr["MST"].ToString()
                    ,TenDN = dr["TenDN"].ToString()
                    ,NCC = dr["NCC"].ToString()
                    ,NgayCap = dr["NgayCap"].ToString()
                    ,Status = dr["Status"].ToString()
                    ,Note = dr["Note"].ToString()
                    });
                }
                con.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
