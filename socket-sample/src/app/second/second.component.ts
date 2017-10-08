import { Router } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit,OnDestroy {

  title = "Second";
  message = "";
  messageSubscription;
  lastMsg;

  constructor(private chat: ChatService, private router:Router) { }

  ngOnInit() {
    this.messageSubscription = this.chat.lastMessage.subscribe(msg => {
      console.log("Message in second: ->" + msg.text);
      this.lastMsg = msg.text;
    })
  }

  sendMessage() {
    this.chat.sendMsg(this.message);
  }

  navigateToFirst() {
    this.router.navigate(['/first']);
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

}
