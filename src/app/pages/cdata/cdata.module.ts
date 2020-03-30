import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdataPageRoutingModule } from './cdata-routing.module';

import { CdataPage } from './cdata.page';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdataPageRoutingModule,
    AngularFirestoreModule
  ],
  declarations: [CdataPage]
})
export class CdataPageModule {}
