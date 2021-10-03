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
    public class MyUserRepository : IMyUserRepository
    {
        public FoerumDbContext db;

        public MyUserRepository(string dbPassword)
        {
            this.db = new FoerumDbContext(dbPassword);
        }
        public void Add(MyUser user)
        {
            this.db.Set<MyUser>().Add(user);
            this.db.SaveChanges();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<MyUser> GetAll()
        {
            throw new NotImplementedException();
        }

        public MyUser GetOne(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(string id, MyUser user)
        {
            throw new NotImplementedException();
        }
    }
}
