﻿using Logic.Interface;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    /* Every controller needs all the CRUD methods */
    [Route("[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private ICommentLogic commentLogic;

        public CommentController(ICommentLogic logic)
        {
            this.commentLogic = logic;
        }

        [HttpGet]
        public IEnumerable<Comment> GetAllComment()
        {
            return this.commentLogic.GetAllComment();
        }

        [HttpGet("{id}")]
        public Comment GetOneComment(string id)
        {
            return this.commentLogic.GetOneComment(id);
        }

        [HttpGet("CommentsOfTopic{topicId}")]
        public IEnumerable<Comment> GetAllCommentsOfTopic(string topicId)
        {
            return this.commentLogic.GetAllCommentsOfTopic(topicId);
        }

        [HttpPost]
        public void CreateComment([FromBody] Comment comment)
        {
            this.commentLogic.CreateComment(comment);
        }

        [HttpPost("AddUserToComment{commentId}")]
        public void AddUserToComment([FromBody] MyUser user, string commentId)
        {
            this.commentLogic.AddUserToComment(user, commentId);
        }

        [HttpPut("{id}")]
        public void EditComment(string id, [FromBody] Comment newComment)
        {
            this.commentLogic.EditComment(id, newComment);
        }

        [HttpDelete("{id}")]
        public void DeleteComment(string id)
        {
            this.commentLogic.DeleteComment(id);
        }

        [HttpDelete("DeleteUserFromComment{commentId}")]
        public void DeleteUserFromComment([FromBody] MyUser user, string commentId)
        {
            this.commentLogic.DeleteUserFromComment(user, commentId);
        }
    }
}
