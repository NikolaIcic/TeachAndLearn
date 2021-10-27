import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GroupChat } from '../models/group-chat';

@Injectable({
  providedIn: 'root'
})
export class GroupChatsService {

  constructor(private http:HttpClient) { }

  Insert(groupChat: GroupChat){
    return this.http.post(environment.urls.groupChats.insert,groupChat);
  }

  InsertInto(groupChat: GroupChat,groupChatID:number){
    return this.http.post(environment.urls.groupChats.insertInto + "/" + groupChatID,groupChat);
  }

  Link(groupID: number,groupChatID: number){
    return this.http.get(environment.urls.groupChats.link + "/" + groupID + "/" + groupChatID);
  }

  Delete(groupChatID: number){
    return this.http.delete(environment.urls.groupChats.delete + "/" + groupChatID);
  }
}
