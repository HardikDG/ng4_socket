import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnDestroy {
  title = "First";
  message = "";
  messageSubscription;
  lastMsg;

  constructor(private chat: ChatService,private router:Router) { }

  ngOnInit() {
    this.messageSubscription = this.chat.lastMessage.subscribe(msg => {
      console.log("Message in first: ->" + msg.text);
      this.lastMsg = msg.text;
    })
  }

  sendMessage() {
    this.chat.sendMsg(this.message);
  }

  navigateToSecond() {
    this.router.navigate(['/second']);
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

}
