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
    AppAvailability
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
