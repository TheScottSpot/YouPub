using System.Collections.Generic;
using YouPub.Context;
using YouPub.Context.Entities;
using YouPub.Repository.Interfaces;
using System.Linq;

namespace YouPub.Repository.Implementations
{
    public class UserRepository : IUserRepository
    {
        private ApplicationDbContext context; 
        public UserRepository(ApplicationDbContext context) 
        { 
            this.context = context; 
        } 
        public bool DeleteUser(long id)
        {
            throw new System.NotImplementedException();
        }

        public List<User> GetAllUsers()
        {
            var users = context.Users.ToList();
            return users;
        }

        public User GetUser(long id)
        {
            throw new System.NotImplementedException();
        }
    }
}