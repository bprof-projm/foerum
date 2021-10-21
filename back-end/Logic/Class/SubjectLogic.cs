﻿using Logic.Interface;
using Models;
using Repository.Class;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Class
{
    public class SubjectLogic : ISubjectLogic
    {
        private ISubjectRepository subjectRepo;

        public SubjectLogic(string dbPassword)
        {
            this.subjectRepo = new SubjectRepository(dbPassword);
        }

        public SubjectLogic()
        {

        }

        public bool CreateSubject(Subject subject)
        {
            try
            {
                this.subjectRepo.Add(subject);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool DeleteSubject(string id)
        {
            try
            {
                this.subjectRepo.Delete(id);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool EditSubject(string id, Subject newSubject)
        {
            try
            {
                this.subjectRepo.Update(id, newSubject);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public IQueryable<Subject> GetAllSubject()
        {
            return this.subjectRepo.GetAll();
        }

        public Subject GetOneSubject(string id)
        {
            return this.subjectRepo.GetOne(id);
        }
    }
}
