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
    [Route("api/[controller]")] // api/ChatMessages
    [ApiController]
    public class ChatMessagesController : ControllerBase
    {
        private readonly MyDBContext _context;
        
        public ChatMessagesController(MyDBContext context)
        {
            _context = context;
        }

        [Route("List")]
        [HttpGet]
        public async Task<List<ChatMessage>> GetList()
        {
            return await _context.ChatMessage.ToListAsync();
        }

        [Route("Messenger/{senderID}")]
        [HttpGet]
        public async Task<List<ChatMessage>> GetMessenger(int senderID)
        {
            return await _context.ChatMessage.Where(g => g.SenderID.Equals(senderID)).ToListAsync<ChatMessage>();
        }

        [Route("MsgUsers/{senderID}")]
        [HttpGet]
        public async Task<List<User>> GetMsgUsers(int senderID)
        {
            var _msgs =  await _context.ChatMessage.Where(g => g.SenderID.Equals(senderID)).ToListAsync<ChatMessage>();
            var _msgsRc = await _context.ChatMessage.Where(g => g.ReceiverID.Equals(senderID)).ToListAsync<ChatMessage>();
            var _users = await _context.User.ToListAsync();
            List<User> newusers = new List<User>();
            foreach(User u in _users)
            {
                bool contains = false;
                foreach(ChatMessage m in _msgs)
                {
                    if(u.UserId == m.ReceiverID)
                    {
                        contains = true;
                        break;
                    }
                }
                foreach(ChatMessage m in _msgsRc)
                {
                    if(u.UserId == m.SenderID)
                    {
                        contains = true;
                        break;
                    }
                }
                if (contains)
                {
                    newusers.Add(u);
                }
            }
            return newusers;
        }

        [Route("Chat/{senderID}/{receiverID}")]
        [HttpGet]
        public async Task<List<ChatMessage>> GetChat(int senderID,int receiverID)
        {
            return await _context.ChatMessage.Where(g => g.SenderID.Equals(senderID) && g.ReceiverID.Equals(receiverID)).ToListAsync<ChatMessage>();
        }

        [Route("Load/{chatMessageID}")]
        [HttpGet]
        public async Task<ActionResult<ChatMessage>> LoadChatMessage(int chatMessageID)
        {
            var _chatMessage = await _context.ChatMessage.FindAsync(chatMessageID);
            return _chatMessage;
        }

        [Route("Insert")]
        [HttpPost]
        public async Task<ActionResult<ChatMessage>> InsertChatMessage([FromBody] ChatMessage chatMessage)
        {
            _context.ChatMessage.Add(chatMessage);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetChatMessage", new { id = chatMessage.ChatMessageID }, chatMessage);
        }

        [Route("Delete/{chatMessageID}")]
        [HttpDelete]
        public async Task<bool> DeleteChatMessage(int chatMessageID)
        {
            var chatMessage = await _context.ChatMessage.FindAsync(chatMessageID);
            _context.ChatMessage.Remove(chatMessage);
            await _context.SaveChangesAsync();

            return true;
        }

    }
}
