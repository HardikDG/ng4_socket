import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

import { AppRoutingMoudule } from './app-routing.module';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingMoudule
  ],
  providers: [ChatService,WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
