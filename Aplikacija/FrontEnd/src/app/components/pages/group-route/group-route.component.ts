import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Group } from 'src/app/models/Group';
import { GroupChat } from 'src/app/models/group-chat';
import { AuthService } from 'src/app/services/auth.service';
import { GroupChatsService } from 'src/app/services/group-chats.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-group-route',
  templateUrl: './group-route.component.html',
  styleUrls: ['./group-route.component.css']
})
export class GroupRouteComponent implements OnInit {
  group: Group;
  formData: GroupChat = new GroupChat();

  constructor(private router:Router,public auth:AuthService,private groupServ:GroupsService,private gcServ: GroupChatsService) {
    this.group = this.router.getCurrentNavigation().extras.state.viewGroup;
   }

  ngOnInit(): void {
    
  }

  checkForUser() :boolean{
    let x = false;
    if(this.auth.loggedIn()){
      this.group.users.forEach(el => {
        if(el.userId == this.auth.currentUser.userId)
          x = true;
      });
      if(this.group.ownerID == this.auth.currentUser.userId)
        x = true;
    }
    return x;
  }

  sendMessage(form:NgForm){
    if(this.formData.message != '' && this.auth.currentUser){
      this.formData.senderName = this.auth.currentUser.firstName;
      this.formData.senderNum = this.auth.currentUser.userId;
      this.gcServ.InsertInto(this.formData,this.group.groupID).subscribe(
        res =>{
          this.group.groupChats.push(this.formData);
          this.resetForm(form);
        },
        err => {console.log(err);}
      );
    }
  }

  joinGroup(){
    this.groupServ.Link(this.group.groupID,this.auth.currentUser.userId).subscribe(
      res => { 
        this.group.users.push(this.auth.currentUser);
      },
      err => { console.log(err);}
    );
  }

  resetForm(form:NgForm){
    this.formData = new GroupChat();
  }

}
