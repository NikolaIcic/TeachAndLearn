import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormRegComponent } from '../../forms/form-reg/form-reg.component';


@Component({
  selector: 'app-nav-reg',
  templateUrl: './nav-reg.component.html',
  styleUrls: ['./nav-reg.component.css']
})
export class NavRegComponent implements OnInit {

  @Output() regEventHandler = new EventEmitter();

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.regEventHandler.emit();
  }

}
