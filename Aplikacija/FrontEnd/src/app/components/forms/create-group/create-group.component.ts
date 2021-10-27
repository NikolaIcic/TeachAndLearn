import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/Group';
import { AuthService } from 'src/app/services/auth.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  formData: Group = new Group();
  
  constructor(private groupServ:GroupsService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.auth.currentUser){
      this.formData.ownerID = this.auth.currentUser.userId;
      this.groupServ.Insert(this.formData).subscribe(
        res =>{        
          this.router.navigate(['group'],{state:{viewGroup : res}});
        },
        err =>{ console.log(err)}
       );
    }
  }

}
