import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdataPage } from './cdata.page';

const routes: Routes = [
  {
    path: '',
    component: CdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdataPageRoutingModule {}
