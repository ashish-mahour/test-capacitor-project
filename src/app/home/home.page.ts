import { Component, OnInit } from '@angular/core';
import { AES256 } from '@awesome-cordova-plugins/aes-256/ngx';
import { AndroidPermissions, AndroidPermissionResponse } from '@awesome-cordova-plugins/android-permissions/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AppAvailability } from '@awesome-cordova-plugins/app-availability/ngx';
import { Platform } from '@ionic/angular';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';

const password = "123456"
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private secureKey: string = ""
  private secureIV: string = ""

  constructor(
    private platform: Platform,
    private callNumber: CallNumber,
    private aes256: AES256,
    private androidPermissions: AndroidPermissions,
    private appVersion: AppVersion,
    private appAvailability: AppAvailability,
    private calendar: Calendar
  ) {}

  async ngOnInit() {
    // this.secureKey = await this.aes256.generateSecureKey(password)
    // this.secureIV = await this.aes256.generateSecureIV(password)
    // this.aes256.encrypt(this.secureKey, this.secureIV, "Ashish").then((res) => {
    //   console.log("encrypt: ", res)
    //   this.aes256.decrypt(this.secureKey, this.secureIV, res).then((res) => console.log("decrypt: ", res)).catch(err => console.log("decrypt Error: ", err))
    // }).catch(err => console.log("encrypt Error: ", err))
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then((res) => console.log("checkPermission: ", res)).catch(err => console.log("checkPermission Error: ", err))
    // this.appVersion.getVersionNumber().then((res) => console.log("getVersionNumber: ", res)).catch(err => console.log("getVersionNumber Error: ", err))
    // let scheme = null
    // if (this.platform.is("android")) {
    //   scheme = "com.instagram.android"
    // } else {
    //   scheme = "instagram://"
    // }
    // this.appAvailability.check(scheme).then((res) => console.log("appAvailability: ", res)).catch(err => console.log("appAvailability Error: ", err))
    this.calendar.listCalendars().then((res) => console.log("listCalendars: ", res)).catch(err => console.log("listCalendars Error: ", err))

  }

  public callNumberTo(number: string) {
    this.callNumber.callNumber(number, true).then((res) => console.log("Call number: ", res)).catch(err => console.log("callNumber Error: ", err))
  }

  exitApp() {
    (<any>navigator)["app"].exitApp();
  }

  pickContact() {
    (<any>navigator).contacts.pickContact((res: any) => {
      console.log("pickContact: ", res)
    }, (err: any) => {
      console.log("callNumber Error: ", err)
    })
  }
}
