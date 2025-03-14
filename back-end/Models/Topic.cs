﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Models
{
    public class Topic
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string TopicID { get; set; }
        public string SubjectID { get; set; }
        [NotMapped]
        [JsonIgnore]
        public Subject Subject { get; set; }
        public string UserID { get; set; }
        [NotMapped]
        [JsonIgnore]
        public MyUser User { get; set; }
        public string TopicName { get; set; }
        public DateTime CreationDate { get; set; }
        public int OfferedCoins { get; set; }
        public string AttachmentURL { get; set; }
        [JsonIgnore]
        public virtual ICollection<TopicTags> Tags { get; set; }

        public Topic()
        {
            this.Tags = new HashSet<TopicTags>();
        }
    }
}
