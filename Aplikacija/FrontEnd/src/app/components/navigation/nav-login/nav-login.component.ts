import { createComponent } from '@angular/compiler/src/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormLogComponent } from '../../forms/form-log/form-log.component';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent implements OnInit {

  @Output() loginEventHandler = new EventEmitter();

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.loginEventHandler.emit();
  }

}
