import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-user-item-a',
  templateUrl: './user-item-a.component.html',
  styleUrls: ['./user-item-a.component.css']
})
export class UserItemAComponent implements OnInit {
  @Input() user: User;
  @Output() deleteEvent = new EventEmitter;
  faTimes = faTimes;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['user'],{state:{ viewUser: this.user }});
  }

  onDelete(){
    this.deleteEvent.emit(this.user);
  }

}
