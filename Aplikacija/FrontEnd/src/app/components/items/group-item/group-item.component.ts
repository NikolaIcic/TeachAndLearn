import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { Group } from 'src/app/models/Group';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  @Input() group: Group;

  constructor(private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['group'],{state:{viewGroup: this.group}});
  }

}
