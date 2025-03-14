﻿using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Interface
{
    public interface ISubjectLogic
    {
        IQueryable<Subject> GetAllSubject();
        Subject GetOneSubject(string id);
        bool CreateSubject(Subject subject);
        bool EditSubject(string id, Subject newSubject);
        bool DeleteSubject(string id);
        IQueryable<Subject> GetAllSubjectsOfYear(string yearId);

        // NOT NEEDED
        //void AddUserToSubject(MyUser user, string subjectId);
        //void DeleteUserFromSubject(MyUser user, string subjectId);
    }
}
