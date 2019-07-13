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
  validateResponse: any;

  ngOnInit() {
    this.currentNumber = '';
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
    console.log('this.validateResponse : ', this.validateResponse);
    console.log('this.validateResponse.cardNumber : ', this.validateResponse.cardNumber);
    console.log('this.validateResponse.cardType : ', this.validateResponse.cardType);
    console.log('this.validateResponse.isValid : ', this.validateResponse.isValid);
    console.log('this.validateResponse.message : ', this.validateResponse.message);
  }

}
