import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/Group';
import { AuthService } from 'src/app/services/auth.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups-route',
  templateUrl: './groups-route.component.html',
  styleUrls: ['./groups-route.component.css']
})
export class GroupsRouteComponent implements OnInit {

  constructor(private groupService: GroupsService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.setGroups();
    this.auth.setMyGroups();
  }

  createGroup(){
    this.router.navigate(['create-group']);
  }

  textChanged(){
    console.log("changed!")
  }

}
