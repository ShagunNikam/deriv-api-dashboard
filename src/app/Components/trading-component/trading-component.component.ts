import { Component, OnInit } from '@angular/core';
import { WebsocketService } from "src/app/services/websocket.service";

@Component({
  selector: 'app-trading-component',
  templateUrl: './trading-component.component.html',
  styleUrls: ['./trading-component.component.scss']
})

export class TradingComponent implements OnInit {
  public response: any;
  public activeData : any = []

  public active_symbols : Object = {
    "active_symbols": "full", 
    "product_type": "basic"
  }

  public tickHistory: Object = {
    "ticks_history": "R_50",
      "adjust_start_time": 1,
      "count": 10,
      "end": "latest",
      "start": 1,
      "style": "ticks"
  }
  public ticks : Object = {
    "ticks": "R_50",
    "subscribe": 1
  }

  // tradingData : Array<any> = [];

  // private api: WebsocketService;

  constructor(private api: WebsocketService) {
    // this.api = apix;
    // this.api.getActiveSymbols();
    // this.api.getTickHistory();
    // this.api.getTicks();
    
  }

  ngOnInit(): void {
    this.api.getActiveSymbols(this.active_symbols);
    this.api.getTickHistory(this.tickHistory);
    this.api.getTicks(this.ticks);
    // this.activeData = this.response.active_symbols
    
    // console.log('data from service:', + this.response);
    // console.log('data from service:', + this.api.getTickHistory());
    // console.log('data from service:', + this.api.getTicks());
  }

}