import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerViewComponent } from './speaker-view/speaker-view.component';
import { SpeakersComponent } from './speakers.component';

const routes: Routes = [
  { path: '', component: SpeakersComponent },
  { path:'speaker-view/:id',component:SpeakerViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
