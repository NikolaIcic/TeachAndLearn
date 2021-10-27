using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TNLWebApp.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; } //

        [Column]
        [MaxLength(30)]
        public string FirstName { get; set; } //

        [Column]
        [MaxLength(30)]
        public string LastName { get; set; } //

        [Column]
        [MaxLength(50)]
        public string Email { get; set; } //

        [Column]
        [MaxLength(8)]
        public string Gender { get; set; } //

        [Column]
        [MaxLength(10)]
        public string DateOfBirth { get; set; } //

        [Column]
        [MaxLength(60)]
        public string Faculty { get; set; } //

        [Column]
        [MaxLength(10)]
        public string Role { get; set; } //

        [Column]
        [MaxLength(100)]
        public string Description { get; set; } //

        [Column]
        [MaxLength(20)]
        public string Password { get; set; } //

        [Column]
        [MaxLength(30)]
        public string Subject { get; set; } //

        [Column]
        public float Rating { get; set; }

        [Column]
        public int RatingCount { get; set; }

        [JsonIgnore]
        public virtual Group Group { get; set; }

    }
}
