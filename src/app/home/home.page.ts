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
import { Storage } from '@ionic/storage-angular';
import { PushNotifications } from "@capacitor/push-notifications"
import { windowToggle } from 'rxjs';
// import * as cv from "@techstark/opencv-js"
// import * as mobilenet from "@tensorflow-models/mobilenet"

// mobilenet.load().then(model => {
  
// })
const password = "123456"
const shortcutActions =  [
  {
    type: "buy-a-membership",
    title: "Buy a Membership",
    iconTemplate: "buy_membership"
  },{
    type: 'gift-certificate',
    title: 'Gift an Experience',
    iconTemplate: 'gift_certificate'
  },
  {
    type: 'redeem-a-benefit',
    title: 'Redeem a Benefit',
    iconTemplate: "redeem_a_benefit"
  },
  {
    type: 'book-social-event',
    title: 'Celebrate with us',
    iconTemplate: 'book_event'
  }
]
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
  // <area target="" alt="" title="" href="" coords="21,633,94,719" shape="rect">
  // <area target="" alt="" title="" href="" coords="174,637,247,713" shape="rect">
  // <area target="" alt="" title="" href="" coords="338,637,420,712" shape="rect">
  private secureKey: string = ""
  private secureIV: string = ""
  private crashlytics: any = null
  public screenshotURI: string | null = null
  public cordinates: Array<Array<number>> = [
    [19,51,100,129], [19,216,100,295], [19,374,98,445], [19,516,102,587], [170,509,250,592], [166,642,255,710], [334,511,433,589], [499,508,581,585], [641,510,717,585], [335,634,429,709], [489,638,584,707], [648,636,720,713], [20,642,99,714], [245,395,323,489], [328,396,408,493], [422,401,496,488], [508,398,582,486], [414,309,497,397], [510,302,578,394], [603,287,717,493], [480,187,684,258], [378,189,448,255], [227,182,374,331]
  ]

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
    private mediaCapture: MediaCapture,
    private storage: Storage
  ) {}

  ngOnInit() {
    // this.testCode()
    // this.platform.ready().then(async () => {
    //   let permStatus = await PushNotifications.checkPermissions();

    //   if (permStatus.receive === 'prompt') {
    //     permStatus = await PushNotifications.requestPermissions();
    //   }

    //   if (permStatus.receive !== 'granted') {
    //     console.error('User denied permissions!');
    //   }

    //   PushNotifications.register().then(() => {
    //     console.log("PushNotifications registered")
    //   }).catch(err => console.log("PushNotifications.register Error: ", err));
      
    //   PushNotifications.addListener("registration", token => {
    //     console.info('Registration token: ', token);
    //     // (<any> window).AEP.setPushIdentifier(token.value,
    //     //   function (value: any) {
    //     //       console.log("sucuss Push", value);
    //     //   }, function (err: any) {
    //     //       console.log("fail Push", err);
    //     //   }
    //     // );
    //   });
    
    //   PushNotifications.addListener('registrationError', err => {
    //     console.error('Registration error: ', err.error);
    //   });
    
    //   PushNotifications.addListener('pushNotificationReceived', notification => {
    //     console.log('Push notification received: ', notification);
    //   });
    
    //   PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    //     console.log('Push notification action performed', notification.actionId, notification.inputValue);
    //   });
    // })
    this.detectObjects()
  }

  private addAndroidShortcuts() {
    const Shortcuts = (<any> window)?.plugins?.Shortcuts
    if (!Shortcuts) return;
    let actions: any[] = [];
    shortcutActions.forEach(action => {
      let shortcut = {
        id: action.type,
        shortLabel: action.title,
        iconFromResource: action.iconTemplate,
        intent: {
          action: action.type,
          categories: [
            action.type,
            'launch'
          ],
          data: {
            type: action.type,
            title: action.title
          },
        }
      };  
      actions.push(shortcut);
    });
    Shortcuts.setDynamic(actions, () => {
      console.log('Shortcuts were applied successfully');
    }, (error: any) => {
      console.log('Error: ' + error);
    });
    Shortcuts.getIntent((intent: any) => {
      if (intent && intent.data && typeof(intent.data) == 'object') {
        console.log("Intent::>", JSON.parse(intent.data));
        if (('type' in intent.data)) {
          localStorage.setItem("payload", JSON.stringify(intent.data));
        }
      }
    });
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

  private async testCode() {
    this.initializechat()
    this.addAndroidShortcuts()
    this.storage.create().then((s) => {
      s.set("temp", "value")
    }).catch(err => console.log("storage.create Error: ", err));
    Contacts.requestPermissions().then((res) => console.log("Contacts.requestPermissions: ", res)).catch(err => console.log("Contacts.requestPermissions Error: ", err));
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
    if (!(<any>window).cordova.plugins.SalesforceSnapIns) {
      console.log("Plugin not found.")
      return; 
    }
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
  private async trainModel() {
    //img data set
    const imageHTML = document.getElementById('cropped') as HTMLImageElement;    
    if (!imageHTML) {
      return;
    }       
    console.log('imageHTML::'+ imageHTML.src);
    console.log("tfjs: ", (<any> window).tf)
    //convert to tensor 
    const tensorImg = (<any> window).tf.fromPixels(imageHTML);
    tensorImg.data().then(async function (stuffTensImg: any){
        console.log('stuffTensImg::'+stuffTensImg.toString());
        
    });
    const model = (<any> window).tf.sequential();
        
    model.add((<any> window).tf.layers.conv2d({
        kernelSize: 5,
        filters: 20,
        strides: 1,
        activation: 'relu',
        inputShape: [imageHTML.height, imageHTML.width, 3],
    }));
    
    model.add((<any> window).tf.layers.maxPooling2d({
        poolSize: [2, 2],
        strides: [2, 2],
    }));
    
    model.add((<any> window).tf.layers.flatten());
    
    model.add((<any> window).tf.layers.dropout(0.2));
    
    // Two output values x and y
    model.add((<any> window).tf.layers.dense({
        units: 2,
        activation: 'tanh',
    }));
    
    // Use ADAM optimizer with learning rate of 0.0005 and MSE loss
    model.compile({
        optimizer: (<any> window).tf.train.adam(0.0005),
        loss: 'meanSquaredError',
    });
    await model.fit(tensorImg, {epochs: 500});
    model.predict(tensorImg).print();
  }

  private async detectObjects() {
    // let src = cv.imread('imageCanvasInput');
    // let templ = cv.imread('templateCanvasInput');
    // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
    // cv.cvtColor(templ, templ, cv.COLOR_RGBA2GRAY, 0);
    // cv.adaptiveThreshold(src, src, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 255, 1);
    // cv.adaptiveThreshold(templ, templ, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 255, 1);
    // let dst = new cv.Mat();
    // let mask = new cv.Mat();
    // cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF_NORMED, mask);
    // let result = cv.minMaxLoc(dst, mask);
    // let maxPoint = result.maxLoc;
    // let color = new cv.Scalar(255, 0, 0, 255);
    // let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
    // cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
    // cv.imshow('canvasOutput', src);
    // src.delete(); dst.delete(); mask.delete();

    const imgs = document.getElementsByClassName('data');
    for (let i = 0; i < imgs.length; i++) {
      const img = (<any> window).cv.imread(imgs.item(i))
      const cropped = (<any> window).cv.imread(document.getElementById('cropped') as HTMLImageElement)
      console.log("Image: ", img)
      console.log("Open CV: ",(<any> window).cv, (<any> window).cv.getBuildInformation())
      let dst = new (<any> window).cv.Mat();
      let mask = new (<any> window).cv.Mat();
      console.log("Open CV: ", (<any> window).cv.matchTemplate(img,cropped, dst, (<any> window).cv.TM_CCOEFF_NORMED))
      let result = (<any> window).cv.minMaxLoc(dst, mask);
      let maxPoint = result.maxLoc;
      let color = new (<any> window).cv.Scalar(255, 0, 0, 255);
      let point = new (<any> window).cv.Point(maxPoint.x + cropped.cols, maxPoint.y + cropped.rows);
      const c = document.createElement('canvas') as HTMLCanvasElement;
      const context = c.getContext('2d');
      (<any> window).cv.rectangle(img, maxPoint, point, color, 2, (<any> window).cv.LINE_8, 0);
      (<any> window).cv.imshow(c, img);
      const container = document.getElementById("container")
      container?.appendChild(c)
      // const model = await (<any> window).deeplab?.load();
      // console.log("Model: ", model)
      // const segment = await model.segment(document.getElementById("cropped"))
      // console.log("Segment: ", segment)
      // Classify the image.
      // const predictions = await model.classify(img);
      // console.log('Predictions');
      // console.log(predictions);
      // const predictions = await model?.predict(img);
      // console.log("Predections: ", predictions)
      // if (predictions.length && img) {
      //   this.drawObject(img, predictions)
      // }
    }

  }

  drawObject(image: HTMLImageElement, result: Array<{bbox: Array<number>, class: string, score: number}>) {
      const c = document.createElement('canvas') as HTMLCanvasElement;
      const context = c.getContext('2d');
      if (context) {
        context.drawImage(image, 0, 0, image.width, image.height);
        context.font = '10px Arial';
    
        console.log('number of detections: ', result.length);
        for (let i = 0; i < result.length; i++) {
          context.beginPath();
          context.rect(result[i].bbox[0], result[i].bbox[1], result[i].bbox[2], result[i].bbox[3]);
          context.lineWidth = 1;
          context.strokeStyle = 'green';
          context.fillStyle = 'green';
          context.stroke();
        }
      }
      const container = document.getElementById("container")
      container?.appendChild(c)
    
  }
}
