/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PayRouteHanldeComponent } from './pay-route-hanlde.component';

describe('PayRouteHanldeComponent', () => {
  let component: PayRouteHanldeComponent;
  let fixture: ComponentFixture<PayRouteHanldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRouteHanldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRouteHanldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
