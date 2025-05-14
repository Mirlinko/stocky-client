import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { RouterService } from './services/router.service';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';


@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [
    RouterService
  ],
  exports: [
    AppLayoutComponent
  ],
})
export class CoreModule {}
