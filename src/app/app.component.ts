import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';

import { Router } from '@angular/router';
import { TrackingService } from './services/tracking.service';

const { Storage } = Plugins;



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private trackingService: TrackingService
  ) {
    this.initializeApp();
  }

  async getIntroDone() {
    const { value } = await Storage.get({key: 'introDone'});
    console.log(value);
    return value;
  }

  async setIntroDone() {
    await Storage.set({
      key: 'introDone',
      value: 'done'
    });
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      const introDone = await this.getIntroDone();
      this.trackingService.initialize();
      if (introDone === null) {
        this.router.navigateByUrl('/intro');
        await this.setIntroDone();
      }
      this.splashScreen.hide();
    });
  }
}
