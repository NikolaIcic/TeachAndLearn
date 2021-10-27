export const environment = {
  production: true,
  urls:{
    users:{
      list:'http://localhost:5000/api/Users/List', //get
      students:'http://localhost:5000/api/Users/Students', //get
      teachers:'http://localhost:5000/api/Users/Teachers', //get 
      admins:'http://localhost:5000/api/Users/Admins', //get
      load:'http://localhost:5000/api/Users/Load', // get /{userID}
      update: 'http://localhost:5000/api/Users/Update', // put (user)
      register: 'http://localhost:5000/api/Users/Register', // post (user)
      insert: 'http://localhost:5000/api/Users/Insert', // post (user)
      delete: 'http://localhost:5000/api/Users/Delete', // delete {userID}
      login: 'http://localhost:5000/api/Users/Login', // post (user)
      rating: 'http://localhost:5000/api/Users/Rating' // post /{newVote}
    },
    groups:{
      list:'http://localhost:5000/api/Groups/List', //get
      load:'http://localhost:5000/api/Groups/Load', // get /{groupID}
      insert:'http://localhost:5000/api/Groups/Insert', // post (group)
      link:'http://localhost:5000/api/Groups/Link', // get /{groupID}/{userID}
      updateGroupChat:'http://localhost:5000/api/Groups/UpdateGroupChat', // get /{groupID}/{groupChatID}
      delete:'http://localhost:5000/api/Groups/Delete' // delete /{groupID}
    },
    groupChats:{
      list:'http://localhost:5000/api/GroupChats/List', // get
      load:'http://localhost:5000/api/GroupChats/Load', // get /{groupChatID}
      update:'http://localhost:5000/api/GroupChats/Update', // put (groupChat)
      link:'http://localhost:5000/api/GroupChats/Link', // get /{groupID}/{groupChatID}
      insert:'http://localhost:5000/api/GroupChats/Insert', // post (groupChat)
      insertInto:'http://localhost:5000/api/GroupChats/InsertInto', // post (groupChat)/{groupChatID}
      delete:'http://localhost:5000/api/GroupChats/Delete', // delete /{groupChatID}
    },
    chatMsg:{
      list:'http://localhost:5000/api/ChatMessages/List', // get
      messenger:'http://localhost:5000/api/ChatMessages/messenger', // get /{senderID}
      msgusers:'http://localhost:5000/api/ChatMessages/MsgUsers', // get /{senderID}
      chat:'http://localhost:5000/api/ChatMessages/chat', // get /{senderID}/{receiverID}
      load:'http://localhost:5000/api/ChatMessages/load', // get {ID}
      insert:'http://localhost:5000/api/ChatMessages/insert', // post (chatmsg)
      delete:'http://localhost:5000/api/ChatMessages/delete' // delete {ID}
    }
  }
};
