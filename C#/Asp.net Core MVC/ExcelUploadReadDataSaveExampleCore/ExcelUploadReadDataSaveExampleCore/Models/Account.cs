using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
using System.Collections.Generic;

namespace ExcelUploadReadDataSaveExampleCore.Models
{
    public class Account
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        [ForeignKey("NCC")]
        public string NCC { get; set; }
    }
}
