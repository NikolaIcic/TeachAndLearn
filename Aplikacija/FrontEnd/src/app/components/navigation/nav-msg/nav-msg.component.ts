import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-msg',
  templateUrl: './nav-msg.component.html',
  styleUrls: ['./nav-msg.component.css']
})
export class NavMsgComponent implements OnInit {
  faCommentDots = faCommentDots;
  constructor(private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }
  openMsg(){
    this.router.navigate(['messenger']);
  }

}
