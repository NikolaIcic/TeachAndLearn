import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-route',
  templateUrl: './profile-route.component.html',
  styleUrls: ['./profile-route.component.css']
})
export class ProfileRouteComponent implements OnInit {
  user: User;
  formData: string = '';
  constructor(private router:Router,private serv:UsersService,public auth:AuthService) {
    this.user = this.router.getCurrentNavigation().extras.state.viewUser;
   }

  ngOnInit(): void {
    this.formData = this.user.description;
  }

  onSubmit(form:NgForm){
    this.user.description = this.formData;
    this.serv.Update(this.user).subscribe(
      res =>{
        this.auth.currentUser.description = this.user.description;
        console.log("done");
      },
      err =>{}
    );
  }

  logoutUser(){
    this.auth.logOut();
    this.router.navigate(['home']);
  }

}
