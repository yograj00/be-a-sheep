import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../overview/overview.module').then(m => m.OverviewPageModule)
          }
        ]
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../status/status.module').then(m => m.StatusPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: 'cdata',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cdata/cdata.module').then(m => m.CdataPageModule)
          }
        ]
      },
      {
        path: 'alert',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../alert/alert.module').then(m => m.AlertPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
