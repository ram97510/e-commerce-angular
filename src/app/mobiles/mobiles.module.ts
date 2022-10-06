import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilesRoutingModule } from './mobiles-routing.module';
import { MobilesComponent } from './mobiles.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';


@NgModule({
  declarations: [
    MobilesComponent,
    MobileViewComponent
  ],
  imports: [
    CommonModule,
    MobilesRoutingModule
  ]
})
export class MobilesModule { }
