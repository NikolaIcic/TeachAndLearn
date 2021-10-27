using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TNLWebApp.Models
{
    public class Group
    {
        [Key]
        public int GroupID { get; set; } //

        [Column]
        [MaxLength(30)]
        public string Name { get; set; } //

        [Column]
        [MaxLength(30)]
        public string Subject { get; set; } //

        [Column]
        public int OwnerID { get; set; }

        [Column]
        public bool PrivateGroup { get; set; } // 

        [Column]
        [MaxLength(100)]
        public string Description { get; set; }  //

        public virtual List<User> Users { get; set; }
        public virtual List<GroupChat> GroupChats { get; set; }
    }
}
