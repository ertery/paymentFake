import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PayRouteHanldeComponent} from "./pay-route-hanlde/pay-route-hanlde.component";

const routes: Routes = [
  { path: ':payId', component: PayRouteHanldeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
