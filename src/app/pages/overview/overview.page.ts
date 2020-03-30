import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import * as moment_ from 'moment';
const moment = moment_;

import 'firebase/firestore';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';

const { PushNotifications } = Plugins;
const { Geolocation } = Plugins;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  coords: any;
  wait: any;

  public lat: any;
  public lng: any;

  totals = {
    cases: 0,
    fatalities: 0,
    hospitalized: 0,
    icu: 0,
    released: 0,
    vent: 0,
  };

  changes = {
    cases: 0,
    fatalities: 0,
    hospitalized: 0,
    icu: 0,
    released: 0,
    vent: 0,
  };

  swissTotal = 0;
  swissToday = 0;
  swissFatalities = 0;

  news: any;

  constructor(private afs: AngularFirestore, public ngZone: NgZone) {
    afs.collection<any>('ov').doc('totals').valueChanges().pipe(tap((totals: any) => this.totals = totals)).subscribe();
    afs.collection<any>('ov').doc('changes').valueChanges().pipe(tap((changes: any) => this.changes = changes)).subscribe();
    afs.collection<any>('news').valueChanges().pipe(tap(data => this.addNews(data))).subscribe();
  }

  ngOnInit() {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });
  }

  private calculateValues(data) {
    this.swissTotal = data.swissTotal;
    this.swissToday = data.swissToday;
    this.swissFatalities = data.swissFatalities;
  }

  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates.coords;
  }

  track() {
    this.wait = Geolocation.watchPosition({}, (position, err) => {
      this.ngZone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    });
  }

  stopTracking() {
    Geolocation.clearWatch({ id: this.wait });
  }

  private addNews(data) {
    this.news = data;
  }
}
