import { Component } from '@angular/core';
import {Http, RequestMethod, RequestOptions, Headers, Response} from "@angular/http";
import {CardDTO} from "./card-dto";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiURL = 'http://localhost:8080/';

  card: CardDTO;

  constructor(private http: Http) {
  }

  addCard(nameOnCard, creditCardNumber, expiryDate, amount) {
      this.card = new CardDTO(nameOnCard, creditCardNumber, expiryDate, amount)
      console.log(this.card.nameOnCard)
      this.POST("purpose", this.card)
  }

  POST(url, data) {
    const headers = new Headers();

    headers.append("Content-Type", 'application/json');
    headers.append("Accept", 'application/json');

    const requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: this.apiURL + url,
      headers: headers,
      body: JSON.stringify(data)
    });

    return this.http.post(this.apiURL + url, requestOptions)
      .map((res: Response) => {
        if (res) {
          return { status: res.status, json: res.json() }
        }
      });
  }
}
