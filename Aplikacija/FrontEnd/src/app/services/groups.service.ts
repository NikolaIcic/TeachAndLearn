import { Injectable } from '@angular/core';
import { Group } from '../models/Group';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { }

  Insert(group:Group): Observable<Group>{
    return this.http.post<Group>(environment.urls.groups.insert,group);
  }

  List() : Observable<Group[]>{
    return this.http.get<Group[]>(environment.urls.groups.list)
  }

  Link(groupID:number,userID:number){
    return this.http.get(environment.urls.groups.link + "/" + groupID + "/" + userID );
  }
  UpdateGroupChat(groupID:number,groupChatID:number){
    return this.http.get(environment.urls.groups.updateGroupChat + "/" + groupID + "/" + groupChatID );
  }
  Delete(groupID:number){
    return this.http.delete(environment.urls.groups.delete + "/" + groupID);
  }
}
