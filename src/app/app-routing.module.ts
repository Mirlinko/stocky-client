import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STATES } from './constants/states';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { 
        path: STATES.dashboard.path, 
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      { 
        path: "**", 
        redirectTo: STATES.dashboard.url 
      }
    ]
  },
  { 
    path: "**", 
    redirectTo: STATES.dashboard.url 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
