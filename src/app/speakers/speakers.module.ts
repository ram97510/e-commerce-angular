import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';
import { SpeakerViewComponent } from './speaker-view/speaker-view.component';


@NgModule({
  declarations: [
    SpeakersComponent,
    SpeakerViewComponent,
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule
  ]
})
export class SpeakersModule { }
