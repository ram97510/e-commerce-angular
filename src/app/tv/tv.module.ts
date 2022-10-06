import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvComponent } from './tv.component';
import { TvViewComponent } from './tv-view/tv-view.component';


@NgModule({
  declarations: [
    TvComponent,
    TvViewComponent
  ],
  imports: [
    CommonModule,
    TvRoutingModule
  ]
})
export class TvModule { }
