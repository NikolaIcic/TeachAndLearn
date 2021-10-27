import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/Group';
import { AuthService } from 'src/app/services/auth.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-group-item-a',
  templateUrl: './group-item-a.component.html',
  styleUrls: ['./group-item-a.component.css']
})
export class GroupItemAComponent implements OnInit {
  faTimes = faTimes;
  @Output() deleteEvent = new EventEmitter;
  @Input() group: Group;

  constructor(private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['group'],{state:{viewGroup: this.group}});
  }
  onDelete(){
    this.deleteEvent.emit(this.group);
  }

}
