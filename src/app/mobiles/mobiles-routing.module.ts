import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { MobilesComponent } from './mobiles.component';

const routes: Routes = [
  { path: '', component: MobilesComponent },
  {path:'mobileview',component:MobileViewComponent},
  {path:'mobileview/:id',component:MobileViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilesRoutingModule { }
