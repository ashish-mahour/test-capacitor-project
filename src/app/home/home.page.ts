import { Component, OnInit } from '@angular/core';
import { AES256 } from '@awesome-cordova-plugins/aes-256/ngx';
import { AndroidPermissions, AndroidPermissionResponse } from '@awesome-cordova-plugins/android-permissions/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AppAvailability } from '@awesome-cordova-plugins/app-availability/ngx';
import { Platform } from '@ionic/angular';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { Market } from '@awesome-cordova-plugins/market/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation } from "@capacitor/geolocation";

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
    private calendar: Calendar,
    private filePath: FilePath,
    private fingerprintAIO: FingerprintAIO,
    private globalization: Globalization,
    private market: Market,
    private nativeGeocoder: NativeGeocoder
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
    // this.calendar.listCalendars().then((res) => console.log("listCalendars: ", res)).catch(err => console.log("listCalendars Error: ", err))
    // this.filePath.resolveNativePath("content://com.android").then((res) => console.log("resolveNativePath: ", res)).catch(err => console.log("resolveNativePath Error: ", err))
    this.globalization.getPreferredLanguage().then((res) => console.log("getPreferredLanguage: ", res)).catch(err => console.log("getPreferredLanguage Error: ", err));
    (<any> window).IRoot.isRooted((res: any) => {
      console.log("isRooted: ", res)
    }, (err: any) => {
      console.log("isRooted Error: ", err)
    });
    Geolocation.getCurrentPosition().then(position => {
      console.log("getCurrentPosition: ", position)
      const options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 1
      };
     this.nativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude, options).then((res) => console.log("reverseGeocode: ", res)).catch(err => console.log("reverseGeocode Error: ", err));;
    }).catch(err => console.log("getCurrentPosition Error: ", err));
    if (this.platform.is("android")) {
      const nonce = this.randomString(16)
      console.log("this.nonce", nonce);
        if ((<any> window).cordova?.plugins?.TLCPlayIntegrity) {
          (<any> window).cordova.plugins.TLCPlayIntegrity.certifyKey(nonce, (result: any) => {
            console.log("Play Integrity Result: ", result)
          }, (error: any) => {
            console.log("Play Integrity Error: ", error)
          })
        }
      }
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

  showLock() {
    this.fingerprintAIO.show({title: "Lock?"}).then((res) => console.log("fingerprintAIO: ", res)).catch(err => console.log("fingerprintAIO Error: ", err))
  }

  openPlayStore() {
    if (this.platform.is("ios")) {
      this.market.open("id310633997").then((res) => console.log("market.open: ", res)).catch(err => console.log("market.open Error: ", err))
    } else {
      console.log("Opening Market.")
      this.market.open("com.whatsapp").then((res) => console.log("market.open: ", res)).catch(err => console.log("market.open Error: ", err))
    }
  }

  randomString(length: number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
