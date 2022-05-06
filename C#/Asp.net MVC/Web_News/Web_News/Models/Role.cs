using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web_News.Models
{
    [Table("Role")]
    public class Role
    {
        [Key]
        [StringLength(50)]
        public string RoleID { get; set; }
        [StringLength(50)]
        public string RoleName { get; set; }
    }
}