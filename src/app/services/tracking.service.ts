import { Injectable } from '@angular/core';
import { Plugins, AppState } from '@capacitor/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DeviceService } from './device.service';
const { App, BackgroundTask, Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  id = null;

  constructor(
    private afs: AngularFirestore,
    private deviceService: DeviceService
  ) {
    this.deviceService.id.subscribe(id => {
       this.id = id;
    });
   }

  public async initialize() {
    if (this.isMobile) {
      setInterval(() => this.saveGps(), 10 * 1000);
    }
    /*App.addListener('appStateChange', (state: AppState) => {
      if (!state.isActive) {
        const taskId = BackgroundTask.beforeExit(async () => {
          BackgroundTask.finish({
            taskId
          });
        });
      }
    });*/
  }

  private saveGps() {
    if (this.id == null) { return; }
    Geolocation.getCurrentPosition().then(coordinates => {
      const data = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
        sick: 0,
        selfestimate: 0,
        timestamp: new Date().getTime()
      };
      this.afs.collection<any>('users').doc(this.id).collection('gpsdata').add(data);
    });
  }

  private isMobile() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }
}
