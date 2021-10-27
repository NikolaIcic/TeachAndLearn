import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ChatMsgService } from 'src/app/services/chat-msg.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {
  @Input() user : User;
  @Output() clickEventHandler = new EventEmitter;
  chat : ChatMessage[] = [];
  constructor(public auth : AuthService, private msgServ : ChatMsgService) { }

  ngOnInit(): void {
    this.loadChat();
  }

  loadChat(){
    if(this.auth.loggedIn() && this.user){
      this.chat = [];
      this.msgServ.Chat(this.auth.currentUser.userId,this.user.userId).subscribe(
        res => {
          this.chat = res;
        },
        err => {console.log(err);}
      );
      this.msgServ.Chat(this.user.userId,this.auth.currentUser.userId).subscribe(
        res => {
          this.chat = this.chat.concat(res);
          this.chat = this.chat.sort((first, second) => 0 - (first.chatMessageID > second.chatMessageID ? -1 : 1));
        },
        err => {console.log(err);}
      );
    }
  }

  onClick(){
    this.clickEventHandler.emit(this.user);
  }

}
