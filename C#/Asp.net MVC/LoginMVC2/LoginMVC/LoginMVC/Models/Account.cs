namespace LoginMVC.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Account
    {
        [Key]
        [StringLength(50)]
        [Required(ErrorMessage ="Username is Required")]
        public string UserName { get; set; }

        [Required(ErrorMessage ="Password is required")]
        [StringLength(50)]
        
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [StringLength(50)]
        public string RoleID { get; set; }
    }
}
