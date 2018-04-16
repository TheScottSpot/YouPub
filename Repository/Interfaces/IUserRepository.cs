using System.Collections.Generic;
using YouPub.Context.Entities;

namespace YouPub.Repository.Interfaces
{
    public interface IUserRepository
    {        
        User GetUser(long id); 
        bool DeleteUser(long id); 
        List<User> GetAllUsers();
    }
}