import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Http, RequestMethod, RequestOptions, Headers, Response} from "@angular/http";
import {CardDTO} from "./card-dto";
import 'rxjs/add/operator/map';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PayRouteHanldeComponent} from "./pay-route-hanlde/pay-route-hanlde.component";
import {PayServiceService} from "./pay-service.service";
import {timeout} from "q";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/timeout'

@Component({
  selector: 'app-root',
  providers: [PayServiceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  apiURL = 'http://localhost:8080/';

  initData: any = {};
  payId: number;

  private _pay_subscription: Subscription;

  constructor(private http: Http, private payService: PayServiceService) {
  }

  ngOnInit(): void {
    console.log("onInit");
    this._pay_subscription = this.payService.idChangeAnnounce$.subscribe((v) => {
      this.payId = v;
      console.log(v);
    });
    this.getData()
  }

  validate(pass) {

    console.log(pass)
  }

  getData() {
    return this.http.get(this.apiURL + this.payId).map((res: Response) => res.json()).subscribe(data => {
      console.log(data);
      this.initData = data
    })
  }

  ngOnDestroy(): void {
    this._pay_subscription.unsubscribe();
  }

}
