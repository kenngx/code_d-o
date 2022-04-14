namespace Hotel_Manager
{
    using System;
    using System.Collections.Generic;
    
    public partial class BookingStatus
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public BookingStatus()
        {
            this.Rooms = new HashSet<Room>();
        }
    
        public int BookingStatusID { get; set; }
        public string BookingStatusName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Room> Rooms { get; set; }
    }
}
 