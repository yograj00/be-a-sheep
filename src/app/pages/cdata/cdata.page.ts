import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import * as moment_ from 'moment';
const moment = moment_;

import 'firebase/firestore';

@Component({
  selector: 'app-cdata',
  templateUrl: './cdata.page.html',
  styleUrls: ['./cdata.page.scss'],
})
export class CdataPage implements OnInit {
  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
  }
}
