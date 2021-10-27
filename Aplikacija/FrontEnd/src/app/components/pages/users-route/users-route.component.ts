import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-route',
  templateUrl: './users-route.component.html',
  styleUrls: ['./users-route.component.css']
})
export class UsersRouteComponent implements OnInit {
  students : User[] = [];
  teachers: User[] = [];

  constructor(private userServ: UsersService) { }

  ngOnInit(): void {
    this.userServ.Students().subscribe(
      res => {this.students = res;},
      err => {console.log(err);}
    );
    this.userServ.Teachers().subscribe(
      res => {this.teachers = res;},
      err => {console.log(err);}
    );
  }

}
