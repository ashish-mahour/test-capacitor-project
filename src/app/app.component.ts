import { Component } from '@angular/core';
import { BranchIo } from '@awesome-cordova-plugins/branch-io/ngx';
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
    private threeDeeTouch: ThreeDeeTouch,
    private branchIo: BranchIo
  ) {
    this.platform.ready().then(() => {
      this.branchIo.initSession().then((res) => console.log("branchIo.initSession: ", res)).catch(err => console.log("branchIo.initSession Error: ", err))
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
