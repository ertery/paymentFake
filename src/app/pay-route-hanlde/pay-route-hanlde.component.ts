import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PayServiceService} from "../pay-service.service";

@Component({
  selector: 'app-pay-route-hanlde',
  providers: [PayServiceService],
  templateUrl: './pay-route-hanlde.component.html',
  styleUrls: ['./pay-route-hanlde.component.css']
})
export class PayRouteHanldeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private  payService: PayServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let payId = params['payId'];
      console.log(payId);
      this.payService.change(payId)
    });
  }

}
