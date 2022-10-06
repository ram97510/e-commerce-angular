import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobAccsRoutingModule } from './mob-accs-routing.module';
import { MobAccsComponent } from './mob-accs.component';
import { AccsViewComponent } from './accs-view/accs-view.component';


@NgModule({
  declarations: [
    MobAccsComponent,
    AccsViewComponent
  ],
  imports: [
    CommonModule,
    MobAccsRoutingModule
  ]
})
export class MobAccsModule { }
