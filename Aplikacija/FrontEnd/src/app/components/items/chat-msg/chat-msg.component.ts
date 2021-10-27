import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';

@Component({
  selector: 'app-chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.css']
})
export class ChatMsgComponent implements OnInit {

  @Input() chatMsg : ChatMessage;
  @Input() leftside : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
