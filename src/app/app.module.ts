import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PayRouteHanldeComponent } from './pay-route-hanlde/pay-route-hanlde.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { FailedPaymentComponent } from './failed-payment/failed-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PayRouteHanldeComponent,
    SuccessPaymentComponent,
    FailedPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
