import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from "src/app/services/websocket.service";


@Component({
  selector: 'app-trading-component',
  templateUrl: './trading-component.component.html',
  styleUrls: ['./trading-component.component.scss']
})
export class TradingComponent implements OnInit {
  public response: any;

  tradingData : Array<any> = [];

  constructor(private api: ApiService) { 
    // api.messages.subscribe(msg => {
    //   console.log('Response from websocket' + msg);
    // })
  }

  // private message = {
  //   author: "tutorialedge",
  //   message: "this is a test message"
  // }

  // sendMsg() {
  //   console.log("new message from client to websocket: ", this.message);
  //   this.api.messages.next(this.message);
  //   this.message.message = "";
  // }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.api.messages.subscribe((msg:any) => {
      this.response = msg;
      console.log('Response from websocket' + msg);
    })
    // this.api.get().subscribe((res: any) => {
    //   this.response = res.active_symbols;
    //   this.tradingData = this.response.filter((e: any )=> {
    //     return e.market === 'forex'
    //   })
    // });
  }


}
