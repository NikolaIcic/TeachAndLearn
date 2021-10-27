import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : string = 'Teach and Learn';
  constructor(private auth:AuthService){}

  ngOnInit(){
    console.log("app started");
    this.auth.setGroups();
  }

}
