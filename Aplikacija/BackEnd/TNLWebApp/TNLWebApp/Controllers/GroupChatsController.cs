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
    public class GroupChatsController : ControllerBase
    {
        private readonly MyDBContext _context;

        public GroupChatsController(MyDBContext context)
        {
            _context = context;
        }


        // api/GroupChats/List
        [Route("List")]
        [HttpGet]
        public async Task<List<GroupChat>> GetList()
        {
            return await _context.GroupChat.ToListAsync();
        }

        
        [Route("Load/{groupChatID}")]
        [HttpGet]
        public async Task<GroupChat> GetGroupChat(int groupChatID)
        {
            var groupChat = await _context.GroupChat.FindAsync(groupChatID);
            return groupChat;
        }


        [Route("Update")]
        [HttpPut]
        public async Task UpdateGroupChat([FromBody] GroupChat groupChat)
        {
            _context.Update<GroupChat>(groupChat);
            await _context.SaveChangesAsync();
        }


        [Route("Link/{groupID}/{groupChatID}")]
        [HttpGet]
        public async Task<bool> LinkGroupChat(int groupID, int groupChatID)
        {
            var _groupChat = await _context.GroupChat.FindAsync(groupChatID);
            var _group = await _context.Group.FindAsync(groupID);
            //var _user = await _context.User.FindAsync(userID);
            _groupChat.Group = _group;
           // _groupChat.User = _user;
            await _context.SaveChangesAsync();
            return true;
        }

        
        [Route("Insert")]
        [HttpPost]
        public async Task<bool> InsertGroupChat([FromBody] GroupChat groupChat)
        {
            _context.GroupChat.Add(groupChat);
            await _context.SaveChangesAsync();
            return true;
        }

        [Route("InsertInto/{groupID}")]
        [HttpPost]
        public async Task<bool> InsertInto([FromBody] GroupChat groupChat,int groupID)
        {
            groupChat.Group = await _context.Group.FindAsync(groupID);
            _context.GroupChat.Add(groupChat);
            await _context.SaveChangesAsync();
            return true;
        }

        [Route("Delete/{groupChatID}")]
        [HttpDelete]
        public async Task<bool> DeleteGroupChat(int groupChatID)
        {
            var groupChat = await _context.GroupChat.FindAsync(groupChatID);
            _context.Remove<GroupChat>(groupChat);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}
