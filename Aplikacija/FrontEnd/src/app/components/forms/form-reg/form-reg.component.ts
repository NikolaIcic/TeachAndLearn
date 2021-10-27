import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.component.html',
  styleUrls: ['./form-reg.component.css']
})
export class FormRegComponent implements OnInit {
  
  formData: User = new User();

  constructor(private userServ: UsersService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
      this.userServ.Register(this.formData).subscribe(
        res => {
          if(res){
            this.resetForm(form);
            this.router.navigate(['login'])
            alert("Success");
          }else{
            this.resetForm(form);
            alert("User with this email address already exists");
          }
          
        },
        err =>{
          console.log(err);
        }
      );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.formData = new User();
  }

}
