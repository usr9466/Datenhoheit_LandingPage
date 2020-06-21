import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'layout-one', 
    pathMatch: 'full' 
  },
  { 
    path: 'demos', 
    loadChildren: './main/main.module#DemoModule'
  },
  { 
    path: 'layout', 
    loadChildren: './layouts/layout.module#LayoutModule'
  },
  { 
    path: '**', 
    redirectTo: 'layout/one'
  }
];

