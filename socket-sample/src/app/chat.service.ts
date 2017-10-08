import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ChatService {
  
  lastMessage = new Subject<any>();
  messages: Subject<any>;

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        this.lastMessage.next(response);
        return response;
      })
   }
  
  sendMsg(msg) {
    this.messages.next(msg);
  }

}