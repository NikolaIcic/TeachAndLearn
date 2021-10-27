using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TNLWebApp.Models
{
    public class GroupChat
    {
        [Key]
        public int GroupChatID { get; set; }

        [Column]
        [MaxLength(80)]
        public string Message { get; set; }


        [Column]
        public int SenderNum { get; set; }


        [Column]
        [MaxLength(30)]
        public string SenderName { get; set; }


        [JsonIgnore]
        public User User { get; set; }
        [JsonIgnore]
        public Group Group { get; set; }
        
    }
}
