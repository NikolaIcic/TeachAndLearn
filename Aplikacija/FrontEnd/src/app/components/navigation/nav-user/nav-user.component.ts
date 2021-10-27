import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css'],
  
})
export class NavUserComponent implements OnInit {
  faUserCircle = faUserCircle;
  constructor(public auth:AuthService,private router:Router) { 

  }

  ngOnInit(): void {
  }

  onClick(): void{
    this.router.navigate(['profile'],{state:{ viewUser: this.auth.currentUser }});
  }

}
