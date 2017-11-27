import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class PayServiceService {
  id: any;
  idChange: Subject<number> = new Subject<number>();

  idChangeAnnounce$ = this.idChange.asObservable();

  constructor() { this.id = 0 }

  change(payId: any) {
    console.log("change" + payId);
    this.idChange.next(payId)
  }

}
