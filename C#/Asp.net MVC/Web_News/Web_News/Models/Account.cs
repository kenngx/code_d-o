using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace Web_News.Models
{
   
    [Table("Account")]
    public class Account
    {
        [Key]
        [StringLength(50)]
        [Required(ErrorMessage ="B?n ph?i nh?p tài kho?n")]
        public string UserName { get; set; }

        [StringLength(50)]
        [Required(ErrorMessage = "B?n ph?i nh?p m?t kh?u")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [StringLength(20)]
        public string RoleID { get; set; }
    }
}
