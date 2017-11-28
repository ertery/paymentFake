import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PayRouteHanldeComponent} from "./pay-route-hanlde/pay-route-hanlde.component";
import {SuccessPaymentComponent} from "./success-payment/success-payment.component";
import {FailedPaymentComponent} from "./failed-payment/failed-payment.component";

const routes: Routes = [
  { path: 'success', component: SuccessPaymentComponent },
  { path: 'fail', component: FailedPaymentComponent },
  { path: ':payId', component: PayRouteHanldeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
