import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatMessage } from '../models/ChatMessage';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ChatMsgService {
  constructor(private http:HttpClient) { }
  List() : Observable<ChatMessage[]>{
    return this.http.get<ChatMessage[]>(environment.urls.chatMsg.list);
  }
  Load(chatmsgID : number) : Observable<ChatMessage>{
    return this.http.get<ChatMessage>(environment.urls.chatMsg.load + '/' + chatmsgID);
  }
  Messenger(senderID : number) : Observable<ChatMessage[]>{
    return this.http.get<ChatMessage[]>(environment.urls.chatMsg.messenger + '/' + senderID);
  }
  MsgUser(senderID: number) : Observable<User[]>{
    return this.http.get<User[]>(environment.urls.chatMsg.msgusers + '/' + senderID);
  }
  Chat(senderID : number,receiverID : number): Observable<ChatMessage[]>{
    return this.http.get<ChatMessage[]>(environment.urls.chatMsg.chat + '/' + senderID + '/' + receiverID);
  }
  Insert(chatMsg : ChatMessage): Observable<ChatMessage>{
    return this.http.post<ChatMessage>(environment.urls.chatMsg.insert,chatMsg);
  }
  Delete(chatmsgID:number){
    return this.http.delete(environment.urls.chatMsg.delete + '/' + chatmsgID);
  }

}
