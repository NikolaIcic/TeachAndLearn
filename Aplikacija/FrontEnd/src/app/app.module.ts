import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { NavItemComponent } from './components/navigation/nav-item/nav-item.component';
import { NavLoginComponent } from './components/navigation/nav-login/nav-login.component';
import { NavRegComponent } from './components/navigation/nav-reg/nav-reg.component';
import { GroupItemComponent } from './components/items/group-item/group-item.component';
import { UserItemComponent } from './components/items/user-item/user-item.component';
import { NavUserComponent } from './components/navigation/nav-user/nav-user.component';
import { GroupMsgComponent } from './components/items/group-msg/group-msg.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavMsgComponent } from './components/navigation/nav-msg/nav-msg.component';
import { ChatMsgComponent } from './components/items/chat-msg/chat-msg.component';
import { ChatItemComponent } from './components/items/chat-item/chat-item.component';
import { NavAdminComponent } from './components/navigation/nav-admin/nav-admin.component';
import { UserItemAComponent } from './components/items/user-item-a/user-item-a.component';
import { GroupItemAComponent } from './components/items/group-item-a/group-item-a.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    NavLoginComponent,
    NavRegComponent,
    routingComponents,
    GroupItemComponent,
    UserItemComponent,
    NavUserComponent,
    GroupMsgComponent,
    NavMsgComponent,
    ChatMsgComponent,
    ChatItemComponent,
    NavAdminComponent,
    UserItemAComponent,
    GroupItemAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
