import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupComponent } from './components/forms/create-group/create-group.component';
import { FormLogComponent } from './components/forms/form-log/form-log.component';
import { FormRegComponent } from './components/forms/form-reg/form-reg.component';
import { InsertUserComponent } from './components/forms/insert-user/insert-user.component';
import { AboutRouteComponent } from './components/pages/about-route/about-route.component';
import { AdminRouteComponent } from './components/pages/admin-route/admin-route.component';
import { GroupRouteComponent } from './components/pages/group-route/group-route.component';
import { GroupsRouteComponent } from './components/pages/groups-route/groups-route.component';
import { HomeRouteComponent } from './components/pages/home-route/home-route.component';
import { MessengerRouteComponent } from './components/pages/messenger-route/messenger-route.component';
import { ProfileRouteComponent } from './components/pages/profile-route/profile-route.component';
import { UserRouteComponent } from './components/pages/user-route/user-route.component';
import { UsersRouteComponent } from './components/pages/users-route/users-route.component';


const routes: Routes = [
  { path: '', component:HomeRouteComponent},
  { path: 'home', component:HomeRouteComponent},
  { path: 'groups', component:GroupsRouteComponent},
  { path: 'group', component:GroupRouteComponent},
  { path: 'users', component:UsersRouteComponent},
  { path: 'user', component:UserRouteComponent},
  { path: 'about', component:AboutRouteComponent},
  { path: 'login', component:FormLogComponent},
  { path: 'register', component:FormRegComponent},
  { path: 'profile', component:ProfileRouteComponent},
  { path: 'create-group', component:CreateGroupComponent},
  { path: 'messenger', component:MessengerRouteComponent},
  { path: 'admin', component:AdminRouteComponent},
  { path: 'insertuser', component:InsertUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeRouteComponent,GroupsRouteComponent,GroupRouteComponent,AboutRouteComponent,FormLogComponent,FormRegComponent,UserRouteComponent,ProfileRouteComponent,CreateGroupComponent,UsersRouteComponent,MessengerRouteComponent,AdminRouteComponent,InsertUserComponent];