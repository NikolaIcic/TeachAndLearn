import { Component, Input, OnInit } from '@angular/core';
import { GroupChat } from 'src/app/models/group-chat';

@Component({
  selector: 'app-group-msg',
  templateUrl: './group-msg.component.html',
  styleUrls: ['./group-msg.component.css']
})
export class GroupMsgComponent implements OnInit {

  @Input() msg : GroupChat;
  constructor() { }

  ngOnInit(): void {
  }

}
