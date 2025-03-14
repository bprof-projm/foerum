﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class UserWalletModel
    {
        public string UserID { get; set; }
        public string UserName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }

        public UserWalletModel(string userID, string userName, string address, string email)
        {
            this.UserID = userID;
            this.UserName = userName;
            this.Address = address;
            this.Email = email;
        }
    }
}
