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
import { SmsRetrieverApi } from 'awesome-cordova-plugins-sms-retriever-api/ngx';
import { UniqueDeviceID } from '@awesome-cordova-plugins/unique-device-id/ngx';
import { Facebook } from '@awesome-cordova-plugins/facebook/ngx';
import { FirebaseAnalytics } from "@awesome-cordova-plugins/firebase-analytics/ngx"
import { FirebaseCrashlytics } from "@awesome-cordova-plugins/firebase-crashlytics/ngx"
import { Contacts } from "@capacitor-community/contacts"
import { MediaCapture } from '@awesome-cordova-plugins/media-capture/ngx';

const password = "123456"

export const CHAT = {
  liveAgentPod: 'd.la2-c1cs-hnd.salesforceliveagent.com',
  chatOrgId: '00D1y0000008lSY',
  deploymentId: '5721y000000001d',
  buttonId: '5731y0000000022',
  navbarBackground: "#FAFAFA",
  navbarInverted: "#010101",
  brandPrimary: "#2c4390",
  brandSecondary: "#2c4390",
  brandPrimaryInverted: "#FBFBFB",
  brandSecondaryInverted: "#FCFCFC",
  contrastPrimary: "#000000",
  contrastSecondary: "#767676",
  contrastTertiary: "#BABABA",
  contrastQuaternary: "#F1F1F1",
  contrastInverted: "#FFFFFF",
  feedbackPrimary: "#E74C3C",
  feedbackSecondary: "#2ECC71",
  feedbackTertiary: "#F5A623",
  overlay: "#000000",
  text: 'text',
  Name: 'First Name',
  lastName: 'Last Name',
  Mobile: 'Mobile',
  Email: 'Email',
  number: 'number',
  email: 'email'
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private secureKey: string = ""
  private secureIV: string = ""
  private crashlytics: any = null
  public screenshotURI: string | null = null

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
    private nativeGeocoder: NativeGeocoder,
    private smsRetrieverApi: SmsRetrieverApi,
    private uniqueDeviceID: UniqueDeviceID,
    private facebook: Facebook,
    private firebaseAnalytics: FirebaseAnalytics,
    private firebaseCrashlytics: FirebaseCrashlytics,
    private mediaCapture: MediaCapture
  ) {}

  ngOnInit() {
    // this.testCode()
    this.platform.ready().then(() => {
    })
  }

  testCrash() {
    this.crashlytics.crash()
  }

  pickContants() {
    Contacts.getContacts({projection: { name: true, phones: true, postalAddresses: true }}).then((res) => console.log("Contacts.getContacts: ", res)).catch(err => console.log("Contacts.getContacts Error: ", err));
  }

  captureVideo() {
    this.mediaCapture.captureVideo({
      duration: 2
    }).then((res) => console.log("Contacts.requestPermissions: ", res)).catch(err => console.log("Contacts.requestPermissions Error: ", err));
  }

  async testCode() {
    Contacts.requestPermissions().then((res) => console.log("Contacts.requestPermissions: ", res)).catch(err => console.log("Contacts.requestPermissions Error: ", err));
    this.initializechat()
    this.crashlytics = this.firebaseCrashlytics.initialise()
    this.firebaseAnalytics.logEvent("Home Page", {}).then((res) => console.log("firebaseAnalytics.logEvent: ", res)).catch(err => console.log("firebaseAnalytics.logEvent Error: ", err));
    this.facebook.getApplicationId().then((res) => console.log("getApplicationId: ", res)).catch(err => console.log("getApplicationId Error: ", err));
    this.secureKey = await this.aes256.generateSecureKey(password)
    this.secureIV = await this.aes256.generateSecureIV(password)
    this.aes256.encrypt(this.secureKey, this.secureIV, "Ashish").then((res) => {
      console.log("encrypt: ", res)
      this.aes256.decrypt(this.secureKey, this.secureIV, res).then((res) => console.log("decrypt: ", res)).catch(err => console.log("decrypt Error: ", err))
    }).catch(err => console.log("encrypt Error: ", err))
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then((res) => console.log("checkPermission: ", res)).catch(err => console.log("checkPermission Error: ", err))
    this.appVersion.getVersionNumber().then((res) => console.log("getVersionNumber: ", res)).catch(err => console.log("getVersionNumber Error: ", err))
    let scheme = null
    if (this.platform.is("android")) {
      scheme = "com.instagram.android"
    } else {
      scheme = "instagram://"
    }
    this.appAvailability.check(scheme).then((res) => console.log("appAvailability: ", res)).catch(err => console.log("appAvailability Error: ", err))
    this.calendar.listCalendars().then((res) => console.log("listCalendars: ", res)).catch(err => console.log("listCalendars Error: ", err))
    this.filePath.resolveNativePath("content://com.android").then((res) => console.log("resolveNativePath: ", res)).catch(err => console.log("resolveNativePath Error: ", err))
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
     this.nativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude, options).then((res) => console.log("reverseGeocode: ", res)).catch(err => console.log("reverseGeocode Error: ", err));
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
        this.smsRetrieverApi.getHashString().then((res) => console.log("getHashString: ", res)).catch(err => console.log("getHashString Error: ", err));
      }
      this.uniqueDeviceID.get().then((res) => console.log("uniqueDeviceID: ", res)).catch(err => console.log("uniqueDeviceID Error: ", err));
      // this.platform.ready().then(() => {
      //   (<any>window).AEP.trackState("Prestige Club: login/signup:C_PC_Onboarding_AddaCelebratorydate", {}, (data: any) => {
      //     console.log('success in analytics', data);
      //   }, (e: any) => {
      //     console.log('error in analytics', e);
      //   });
      // })
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

  takeScreenshot() {
    (<any>navigator).screenshot.URI((error: any, res: any) =>{
      if (error) {
        console.error("screenshot.save Error: ", error);
      } else {
        console.log('screenshot.save', res);
        this.screenshotURI = res?.URI
        setTimeout(() => {
          this.screenshotURI = null
        }, 2000)
      }
    });
  }

  initializechat() {

    const SalesforceSnapIns = (<any>window).cordova.plugins.SalesforceSnapIns;
    SalesforceSnapIns.initialize({
      liveAgentChat: {
        liveAgentPod: CHAT.liveAgentPod,
        orgId: CHAT.chatOrgId,
        deploymentId: CHAT.deploymentId,
        buttonId: CHAT.buttonId
      },
      colors: {
        navbarBackground: CHAT.navbarBackground,
        navbarInverted: CHAT.navbarInverted,
        brandPrimary: CHAT.brandPrimary,
        brandSecondary: CHAT.brandSecondary,
        brandPrimaryInverted: CHAT.brandPrimaryInverted,
        brandSecondaryInverted: CHAT.brandSecondaryInverted,
        contrastPrimary: CHAT.contrastPrimary,
        contrastSecondary: CHAT.contrastSecondary,
        contrastTertiary: CHAT.contrastTertiary,
        contrastQuaternary: CHAT.contrastQuaternary,
        contrastInverted: CHAT.contrastInverted,
        feedbackPrimary: CHAT.feedbackPrimary,
        feedbackSecondary: CHAT.feedbackSecondary,
        feedbackTertiary: CHAT.feedbackTertiary,
        overlay: CHAT.overlay
      }
    });


  }

  //..Start With Visitor Chat here//
  startWithVisitorChat() {

    const SalesforceSnapIns = (<any>window).cordova.plugins.SalesforceSnapIns;
    SalesforceSnapIns.clearPrechatFields();
    SalesforceSnapIns.addPrechatField({
      type: CHAT.text,
      label: CHAT.Name,
      required: true
    });

    SalesforceSnapIns.addPrechatField({
      type: CHAT.text,
      label: CHAT.lastName,
      required: true
    });

    SalesforceSnapIns.addPrechatField({
      type: CHAT.text,
      label: CHAT.Mobile,
      required: true,
      keyboardType: SalesforceSnapIns.KEYBOARD_TYPE_NUMBER_PAD,
      autocorrectionType: SalesforceSnapIns.AUTOCORRECTION_TYPE_NO
    });

    SalesforceSnapIns.addPrechatField({
      type: CHAT.text,
      label: CHAT.Email,
      required: true,
      keyboardType: SalesforceSnapIns.KEYBOARD_TYPE_EMAIL_ADDRESS,
      autocorrectionType: SalesforceSnapIns.AUTOCORRECTION_TYPE_NO
    });

    // SalesforceSnapIns.addPrechatField({
    //   type: 'hidden',
    //   label: 'Progran id', // demo label name given 
    //   value: environment.headers.program_id,
    //   required: false
    // });

    let object = this;
    SalesforceSnapIns.determineAvailability((available: any) => {
      console.log("available", available);
      if (available) {
        SalesforceSnapIns.openLiveAgentChat((check: any) => {
          console.log("check2", check);
          if (check == 'email') {
            //console.log("check", check);
            setTimeout(() => {
              console.log("please enter valid email.");
            }, 500)

          } else if (check == 'mobile') {
            setTimeout(() => {
              console.log("please enter valid mobile number.");
            }, 500)
          } else if (check == 'mobileemail') {
            setTimeout(() => {
              console.log("please enter valid mobile number and email.");
            }, 500)
          }
        }, function () {
        });
      } else {
        console.log("Agent is unavailable")
      }
    }, (err: any) => {
      console.log("determineAvailability Error: ", err)
    });
  }
}
