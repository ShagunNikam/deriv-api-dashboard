import { Injectable } from "@angular/core";
import * as Rx from "rxjs";

@Injectable()
export class WebsocketService {
  constructor() {}

  private subject: Rx.Subject<MessageEvent>;

  public connect(url:any): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  private create(url:any): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);
    // ws.onopen = function(e) {
    //   alert("[open] Connection established");
    //   alert(ws.readyState === WebSocket.OPEN)
    // };

    let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>, e : any) => {
      ws.onopen = obs.next.bind(obs, e);
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object) => {
        console.log(ws.readyState === WebSocket.OPEN)
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Rx.Subject.create(observer, observable);
  }
}