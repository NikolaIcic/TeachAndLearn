import { Injectable } from '@angular/core';
import { Group } from '../models/Group';
import { User } from '../models/User';
import { GroupsService } from './groups.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User = null;
  groups: Group[] = null;
  myGroups: Group[] = [];
  constructor(private groupServ: GroupsService) { }

  loggedIn() : boolean{
    if(this.currentUser != null)
      return true;
    return false;
  }

  logOut(){
    this.currentUser = null;
    this.myGroups = null;
  }

  setGroups(){
    this.groupServ.List().subscribe(
      res =>{
        this.groups = res;
      },
      err => {
        console.log(err);
      }
      );
  }

  setMyGroups(){
    if(this.currentUser && this.groups){
      this.myGroups = [];
      this.groups.forEach(element => {
        if(element.ownerID == this.currentUser.userId)
          this.myGroups.push(element);
      });
    }
  }
}
