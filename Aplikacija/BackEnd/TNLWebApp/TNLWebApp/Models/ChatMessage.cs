using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TNLWebApp.Models
{
    public class ChatMessage
    {
        [Key]
        public int ChatMessageID { get; set; }

        [Column]
        public int SenderID { get; set; }

        [Column]
        public int ReceiverID { get; set; }

        [Column]
        public bool MsgRead { get; set; }

        [MaxLength(80)]
        public string Message { get; set; }

    }
}
