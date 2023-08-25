import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebsocketService } from "./websocket.service";

const app_id = 1089;

const API_URL = `wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`;
// const API_URL = './../../assets/mockData/getData.json';
// const URL = "ws://echo.websocket.org/";

export interface Message {
  name: string;
  price: number;
  changePrice: number
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

  public messages: any;

  constructor(private http: HttpClient, wsService: WebsocketService) {
  // this.messages = wsService.connect(API_URL);
  this.listenForEvents();
  this.onMessage(null, 'test');


 }

 onMessage(data: any, stat : string) {
  console.log("Checking Active symbols")
  this.messages.next({
    "active_symbols": "brief",
    "product_type": "basic"
  });

 }

      
 listenForEvents() {
  console.log("Listening for Events");

  this.messages.subscribe((msg:any) => {
    console.log("Response from websocket: " + msg);
  });
}

  // public get(): Observable<any> {
  //   return this.http.get(API_URL).pipe(map(res => res));
  // }
}
