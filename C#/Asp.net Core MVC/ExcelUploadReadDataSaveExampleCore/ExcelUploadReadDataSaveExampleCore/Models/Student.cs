using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ExcelUploadReadDataSaveExampleCore.Models
{
    public class Student
    {
        [Key]
        public string ID { get; set; }= "";
        public string MST { get; set; }= "";
        public string TenDN { get; set; } = "";
        public string NCC { get; set; } = "";
        public string NgayCap { get; set; } = "";
        public string Status { get; set; } = "";
        public string Note { get; set; } = "";
    }
}
