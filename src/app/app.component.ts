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

  apiURL = 'http://ec2-35-166-233-124.us-west-2.compute.amazonaws.com:8080/payment/';

  initData: any = {};
  payId: number;
  showForm = true;
  isValid = false;

  private _pay_subscription: Subscription;

  constructor(private http: Http, private payService: PayServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this._pay_subscription = this.payService.idChangeAnnounce$.subscribe((v) => {
      this.payId = v;
      this.getData()
    });
  }

  validate(pass) {
    console.log("Entered code: " + pass);
    this.http.get(this.apiURL + "check?code=" + pass + "&paymentId=" + this.payId + "&personId=" + this.initData.personId).map((res: Response) => res.json()).subscribe(data => {
      this.isValid = data;
      if (this.isValid) {
        this.router.navigate(['success']);
        this.showForm = false
      } else {
        this.router.navigate(['fail']);
        this.showForm = false
      }
    });
  }

  regenerateCode() {
    this.http.get(this.apiURL + "generate/").map((res: Response) => res.json()).subscribe(data => {
      console.log("Generated Value: " + data)
    })
  };

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
