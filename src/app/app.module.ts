import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { ThreeDeeTouch } from '@awesome-cordova-plugins/three-dee-touch/ngx';
import { AES256 } from '@awesome-cordova-plugins/aes-256/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { AppAvailability } from '@awesome-cordova-plugins/app-availability/ngx';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { Market } from '@awesome-cordova-plugins/market/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { NetworkInterface } from '@awesome-cordova-plugins/network-interface/ngx';
import { SmsRetrieverApi } from 'awesome-cordova-plugins-sms-retriever-api/ngx';
import { UniqueDeviceID } from '@awesome-cordova-plugins/unique-device-id/ngx';
import { BranchIo } from "@awesome-cordova-plugins/branch-io/ngx";
import { Facebook } from '@awesome-cordova-plugins/facebook/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    CallNumber, 
    ThreeDeeTouch, 
    AES256,
    AndroidPermissions,
    AppVersion,
    AppAvailability,
    Calendar,
    FilePath,
    FingerprintAIO,
    Globalization,
    Market,
    NativeGeocoder,
    NetworkInterface,
    SmsRetrieverApi,
    UniqueDeviceID,
    BranchIo,
    Facebook
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
