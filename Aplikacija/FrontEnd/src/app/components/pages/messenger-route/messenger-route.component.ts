import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ChatMsgService } from 'src/app/services/chat-msg.service';

@Component({
  selector: 'app-messenger-route',
  templateUrl: './messenger-route.component.html',
  styleUrls: ['./messenger-route.component.css']
})
export class MessengerRouteComponent implements OnInit {
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  receiverU : User;
  formData: ChatMessage = new ChatMessage();
  chat : ChatMessage[] = [];
  messenger : User[] = [];
  interval;
  constructor(private router:Router,private msgServ:ChatMsgService,public auth:AuthService) {
    if(this.router.getCurrentNavigation().extras.state)
      this.receiverU = this.router.getCurrentNavigation().extras.state.viewUser;
   }

  ngOnInit(): void {
    this.loadChat();
    this.loadUtU();
    this.interval = setInterval(() => {
      this.loadChat();
      this.loadUtU();
    }, 10000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

  sendMessage(form: NgForm){
    if(this.formData.message != '' && this.auth.loggedIn()){
      this.formData.senderID = this.auth.currentUser.userId;
      this.formData.receiverID = this.receiverU.userId;
      this.msgServ.Insert(this.formData).subscribe(
        res => {
          this.chat.push(this.formData);
          this.resetForm(form);
          this.scrollToBottom();
        },
        err => {console.log(err);}
      );
      
    }
  }

  loadChat(){
    if(this.auth.loggedIn() && this.receiverU){
      this.chat = [];
      this.msgServ.Chat(this.auth.currentUser.userId,this.receiverU.userId).subscribe(
        res => {
          this.chat = res;
        },
        err => {console.log(err);}
      );
      this.msgServ.Chat(this.receiverU.userId,this.auth.currentUser.userId).subscribe(
        res => {
          this.chat = this.chat.concat(res);
          this.chat = this.chat.sort((first, second) => 0 - (first.chatMessageID > second.chatMessageID ? -1 : 1));
        },
        err => {console.log(err);}
      );
    }
  }
  
  loadUtU(){
    if(this.auth.loggedIn()){
      this.msgServ.MsgUser(this.auth.currentUser.userId).subscribe(
        res =>{
          this.messenger = res;
        },
        err =>{console.log(err);}
      );
    }
  }

  resetForm(form:NgForm){
    this.formData = new ChatMessage();
  }

  changeReceiverHandler(value){
    this.receiverU = value;
    this.loadChat();
    this.formData = new ChatMessage();
  }

  scrollToBottom(): void {
    try {
        this.scrollFrame.nativeElement.scrollTop = this.scrollFrame.nativeElement.scrollHeight;
    } catch(err) { }                 
}

}
