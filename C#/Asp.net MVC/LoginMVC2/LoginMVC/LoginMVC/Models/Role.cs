using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LoginMVC.Models
{
    [Table("Role")]
    public class Role
    {
        [Key]
        public string RoleID { get; set; }
        public string RoleName { get; set; }
    }
}