using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TNLWebApp.Models;

namespace TNLWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDBContext _context;

        public UsersController(MyDBContext context)
        {
            _context = context;
        }

		// api/Users/List
        [Route("List")]
        [HttpGet]
        public async Task<List<User>> GetUser()
        {
            return await _context.User.ToListAsync();
        }

        [Route("Students")]
        [HttpGet]
        public async Task<List<User>> GetStudents()
        {
            return await _context.User.Where(u => u.Role.Equals("Student")).ToListAsync<User>();
        }

        [Route("Teachers")]
        [HttpGet]
        public async Task<List<User>> GetTeachers()
        {
            return await _context.User.Where(u => u.Role.Equals("Teacher")).ToListAsync<User>();
        }

        [Route("Admins")]
        [HttpGet]
        public async Task<List<User>> GetAdmins()
        {
            return await _context.User.Where(u => u.Role.Equals("Admin")).ToListAsync<User>();
        }

        [Route("Load/{userID}")]
        [HttpGet]
        public async Task<User> GetUser(int userID)
        {
            var user = await _context.User.FindAsync(userID);
            return user;
        }

        [Route("Update")]
        [HttpPut]
        public async Task UpdateUser([FromBody] User user)
        {
            _context.Update<User>(user);
            await _context.SaveChangesAsync();
        }

        [Route("Rating/{userID}/{newVote}")]
        [HttpPost]
        public async Task UpdateRating(int userID,int newVote)
        {
            var _user = await _context.User.FindAsync(userID);
            _user.Rating = (_user.Rating * _user.RatingCount + newVote) / (_user.RatingCount + 1);
            _user.RatingCount++;
            await _context.SaveChangesAsync();
        }

        [Route("Register")]
        [HttpPost]
        public async Task<bool> RegisterUser([FromBody] User user)
        {
            if(_context.User.Where(u => u.Email.Equals(user.Email)).FirstOrDefault() == null)
            {
                _context.User.Add(user);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        [Route("Insert")]
        [HttpPost]
        public async Task<bool> InsertUser([FromBody] User user)
        {
            if (_context.User.Where(u => u.Email.Equals(user.Email)).FirstOrDefault() == null)
            {
                _context.User.Add(user);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        [Route("Delete/{userID}")]
        [HttpDelete]
        public async Task DeleteUser(int userID)
        {

            var user = await _context.User.FindAsync(userID);
            try
            {
                user.Group.Users.Remove(user);
            }
            catch
            {

            }
               
            _context.Remove(user);
            await _context.SaveChangesAsync();

        }
		
        [Route("Login")]
        [HttpPost]
        public async Task<User> UserExists([FromBody] User user)
        {
            var Users = await _context.User.ToListAsync();
            foreach(User u in Users)
            {
                if(user.Email==u.Email && user.Password == u.Password)
                {
                    return u;
                }
            }
            return null;
        }

        [Route("GetKey")]
        [HttpPost]
        public async Task<int> GetKey([FromBody] User user)
        {
            var Users = await _context.User.ToListAsync();
            int _key = -11;
            foreach (User u in Users)
            {
                if (user.Email == u.Email && user.Password == u.Password)
                {
                    _key = u.UserId;
                }
            }
            return _key;
        }
    }
}
