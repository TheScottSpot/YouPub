

using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using YouPub.Repository.Interfaces;
using YouPub.Context;
using System.Collections.Generic;

namespace YouPub.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        // Add the db context to the constructor so that we can access our user model
        private readonly ApplicationDbContext _appDbContext;
        private readonly IUserRepository _userRepository;

        public AccountsController(ApplicationDbContext appDbContext, IUserRepository userRespository)
        {
            _appDbContext = appDbContext;
            _userRepository = userRespository;
        }


        [HttpGet]
        [Route("message")]
        [Authorize]
        public IActionResult Private()
        {
            return Json(new
            {
                Message = "Hello from a private endpoint! You need to be authenticated to see this."
            });
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetAllUsers()
        {

            var users = _userRepository.GetAllUsers();

            return new ObjectResult(users);
        }
    }
}
