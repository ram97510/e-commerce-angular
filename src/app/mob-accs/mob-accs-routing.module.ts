import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccsViewComponent } from './accs-view/accs-view.component';
import { MobAccsComponent } from './mob-accs.component';

const routes: Routes = [
  { path: '', component: MobAccsComponent },
  {path:'accs-view',component:AccsViewComponent},
  {path:'accs-view/:id',component:AccsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobAccsRoutingModule { }
