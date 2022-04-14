using ExcelUploadReadDataSaveExampleCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExcelUploadReadDataSaveExampleCore.Context
{
    public class DatabaseContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            var connectionString = string.Format(@"Data Source=TUANANH\SQLEXPRESS;Initial Catalog=Login_And_Import;Integrated Security=True");
            options.UseSqlServer(connectionString);
        }
        public DbSet<Student> Students { get; set; }
        public DbSet<Account> Searches { get; set; }

    }
}
