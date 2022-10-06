import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvViewComponent } from './tv-view/tv-view.component';
import { TvComponent } from './tv.component';

const routes: Routes = [
  { path: '', component: TvComponent },
  {path:'tvview',component:TvViewComponent},
  {path:'tvview/:id',component:TvViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvRoutingModule { }
