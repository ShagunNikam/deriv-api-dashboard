import { Injectable } from "@angular/core";
import { webSocket } from 'rxjs/webSocket';
import * as Rx from "rxjs";

@Injectable()
export class WebsocketService {

  private sub: Rx.Subject<any>;

  constructor() {
    console.log("Connecting to socket")
    const APP_URL = "wss://ws.binaryws.com/websockets/v3?app_id=1086";
    this.sub = webSocket(APP_URL);
    this.sub.subscribe(
      (res) => console.log('****',res),
      (err) => console.log(err),
      () => console.log("Connection Opened")
    )
  }

  getActiveSymbols(value: any) {
    this.sub.next(value);
  }

  getTickHistory(value:any) {
    this.sub.next(value);
  }

  getTicks(value:any) {
    this.sub.next(value);
  }
}