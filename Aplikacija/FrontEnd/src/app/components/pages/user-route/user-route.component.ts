import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-route',
  templateUrl: './user-route.component.html',
  styleUrls: ['./user-route.component.css']
})
export class UserRouteComponent implements OnInit {
  user: User;

  constructor(private router: Router,public auth:AuthService) {
    this.user = this.router.getCurrentNavigation().extras.state.viewUser;
   }

  ngOnInit(): void {
    
  }

  openInMessenger(){
    this.router.navigate(['messenger'], {state:{ viewUser: this.user }});
  }

}
