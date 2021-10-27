import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.css']
})
export class FormLogComponent implements OnInit {

  formData:User = new User();

  constructor(private userServ:UsersService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.userServ.Login(this.formData).subscribe(
      res => {
        if(res != null){
          this.auth.currentUser = res;
          this.resetForm(form);
          this.router.navigate(['home']);
          
        }else{
          alert("Wrong email or password!");
          this.resetForm(form);
        }
      },
      err => {
        alert(err);
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.formData = new User();
  }

}
