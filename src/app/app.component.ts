import {Component, OnInit} from '@angular/core';
import {isValid} from 'cc-validate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentNumber: any;
  currentStatus: any;
  currentCardType: any;
  validateResponse: any;

  ngOnInit() {
    this.currentNumber = '';
    this.currentCardType = 'N/A';
    this.currentStatus = 'VALID CREDIT CARD';
  }

  validate() {
    this.validateResponse = isValid(this.currentNumber);
    if (this.validateResponse.isValid) {
      this.currentStatus = 'VALID CREDIT CARD';
    } else if (!this.validateResponse.isValid) {
      this.currentStatus = 'INVALID CREDIT CARD';
    }
    this.currentNumber = this.validateResponse.cardNumber;

    if (this.validateResponse.cardType !== '') {
      this.currentCardType = this.validateResponse.cardType;
    } else {
      this.currentCardType = 'N/A';
    }
  }

}
