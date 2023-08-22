import { Component } from '@angular/core';
import { ThreeDeeTouch } from '@awesome-cordova-plugins/three-dee-touch/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform, 
    private threeDeeTouch: ThreeDeeTouch
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is("ios")) {
        this.threeDeeTouch.isAvailable().then(rs => {
          console.log("isAvailable::>", rs);
          this.threeDeeTouch.configureQuickActions([
            {
              title: "Item 1",
              iconTemplate: "item",
              type: "item",
            }
          ]);
        }).catch(e => {});
      }
    })
  }
}
