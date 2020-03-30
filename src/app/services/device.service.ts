import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject } from 'rxjs';

const { Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  id: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    Device.getInfo().then(info => {
      this.id.next(info.uuid);
    });
  }

  initialize() {

  }

}
