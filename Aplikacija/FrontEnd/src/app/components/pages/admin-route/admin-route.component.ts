import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/Group';
import { User } from 'src/app/models/User';
import { GroupsService } from 'src/app/services/groups.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-route',
  templateUrl: './admin-route.component.html',
  styleUrls: ['./admin-route.component.css']
})
export class AdminRouteComponent implements OnInit {
  users : User[] = [];
  groups : Group[] = [];
  constructor(private router: Router,private userServ:UsersService,private groupServ:GroupsService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadGroups();
  }

  loadUsers(){
    this.userServ.List().subscribe(
      res => {
        this.users = res;
      },
      err => {console.log(err);}
    );
  }

  loadGroups(){
    this.groupServ.List().subscribe(
      res => {
        this.groups = res;
      },
      err => {console.log(err);}
    );
  }

  insertUser(){
    this.router.navigate(['insertuser']);
  }

  deleteHandlerUser(value){
    this.userServ.Delete(value.userId).subscribe(
      res => {
        this.loadUsers();
      },
      err => {console.log(err);}
    );
  }
  deleteHandlerGroup(value){
    this.groupServ.Delete(value.groupID).subscribe(
      res => {
        this.loadGroups();
      },
      err => {console.log(err);}
    );
  }

}
