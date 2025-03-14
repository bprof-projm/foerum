﻿using Data;
using Models;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Class
{
    public class TopicTagsRepository : ITopicTagsRepository
    {
        public FoerumDbContext db;

        public TopicTagsRepository(string dbPassword)
        {
            this.db = new FoerumDbContext(dbPassword);
        }

        public IEnumerable<Tag> GetOneTopicAllTag(string topicId)
        {
            return this.db.Set<TopicTags>().Where(x => x.TopicID == topicId).Select(x => x.Tag);
        }

        public IEnumerable<Topic> GetOneTagAllTopic(string tagId)
        {
            return this.db.Set<TopicTags>().Where(x => x.TagID == tagId).Select(x => x.Topic);
        }
    }
}
