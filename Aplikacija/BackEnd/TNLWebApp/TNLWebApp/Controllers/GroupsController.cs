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
    public class GroupsController : ControllerBase
    {
        private readonly MyDBContext _context;

        public GroupsController(MyDBContext context)
        {
            _context = context;
        }

		// api/Groups/List
        [Route("List")]
        [HttpGet]
        public async Task<List<Group>> ListGroups()
        {
            return await _context.Group.Include(p => p.Users).Include(p=>p.GroupChats).ToListAsync();
        }


        [Route("Load/{groupID}")]
        [HttpGet]
        public async Task<Group> GetGroup(int groupID)
        {
            var gr = await _context.Group.Include(p => p.Users).Include(p => p.GroupChats).SingleOrDefaultAsync(x => x.GroupID == groupID);
            return gr; 
        }


        [Route("Insert")]
        [HttpPost]
        public async Task<ActionResult<Group>> InsertGroup([FromBody] Group group)
        {
            _context.Group.Add(group);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetChatMessage", new { id = group.GroupID }, group);
        }
		
		
		// api/Groups/UpdateGroupUsers
        [Route("Link/{groupID}/{userID}")]
        [HttpGet]
        public async Task<bool> UpdateGroupUsers(int groupID,int userID)
        {
            var _user = await _context.User.FindAsync(userID);
            var _group = await _context.Group.FindAsync(groupID);
            _user.Group = _group;
            await _context.SaveChangesAsync();
			return true;
        }
		
		
		// api/Groups/UpdateGroupChat
		[Route("UpdateGroupChat/{groupID}/{groupChatID}")]
        [HttpGet]
        public async Task<bool> UpdateGroupChat(int groupID,int groupChatID)
        {
            var _groupChat = await _context.GroupChat.FindAsync(groupChatID);
            var _group = await _context.Group.FindAsync(groupID);
            _groupChat.Group = _group;
            await _context.SaveChangesAsync();
			return true;
        }


        [Route("Delete/{groupID}")]
        [HttpDelete]
        public async Task<bool> DeleteGroup(int groupID)
        {
            var group = await _context.Group.Include(p => p.Users).Include(p => p.GroupChats).SingleOrDefaultAsync(x => x.GroupID == groupID);
            try
            {
                foreach (GroupChat gc in group.GroupChats)
                {
                    gc.Group = null;
                }
                foreach (User u in group.Users)
                {
                    u.Group = null;
                }
            }
            catch
            {

            }
            _context.Remove(group);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
