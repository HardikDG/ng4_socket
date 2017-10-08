import { Subject } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private chat: ChatService){ }

  ngOnInit() {
      this.chat.messages.subscribe(msg => {
        console.log("Message in app: ->" + msg);
      })
  }
}