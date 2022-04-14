namespace Hotel_Manager
{
    using System;
    using System.Collections.Generic;
     
    public partial class Booking
    { 
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Booking()
        {
            this.Payments = new HashSet<Payment>();
        }
    
        public int BookingID { get; set; }
        public Nullable<int> AssignRoomID { get; set; }
        public Nullable<int> CustomerID { get; set; }
        public string BookingFrom { get; set; }
        public string BookingTo { get; set; }
        public string Quantity { get; set; }
        public Nullable<int> TotalAmount { get; set; }
        public Nullable<int> RoomPrice { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Room Room { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
