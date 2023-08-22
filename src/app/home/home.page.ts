import { Component } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private callNumber: CallNumber
  ) {}

  public callNumberTo(number: string) {
    this.callNumber.callNumber(number, true).then((res) => console.log("Call number: ", res)).catch(err => console.log("callNumber Error: ", err))
  }

}
