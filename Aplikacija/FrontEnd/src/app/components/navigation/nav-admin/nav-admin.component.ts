import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  faAddressCard = faAddressCard;
  constructor(private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  openAdmin(){
    this.router.navigate(['admin']);
  }

}
