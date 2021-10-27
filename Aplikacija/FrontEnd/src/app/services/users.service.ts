import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  List() : Observable<User[]>{
    return this.http.get<User[]>(environment.urls.users.list);
  }

  Students() : Observable<User[]>{
    return this.http.get<User[]>(environment.urls.users.students);
  }

  Teachers() : Observable<User[]>{
    return this.http.get<User[]>(environment.urls.users.teachers);
  }

  Admins() : Observable<User[]>{
    return this.http.get<User[]>(environment.urls.users.admins);
  }

  Load(userID: number) : Observable<User>{
    return this.http.get<User>(environment.urls.users.load + "/" + userID);
  }

  Update(user:User){
    return this.http.put(environment.urls.users.update,user);
  }

  Login(userData:User) {
    return this.http.post<User>(environment.urls.users.login,userData);
  }

  Register(newUserData:User){
    return this.http.post<User>(environment.urls.users.register,newUserData);
  }

  Insert(newUserData:User){
    return this.http.post<User>(environment.urls.users.insert,newUserData);
  }

  Delete(userID:number){
    return this.http.delete(environment.urls.users.delete + "/" + userID);
  }

}
