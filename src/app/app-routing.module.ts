import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',component:HomeComponent},



  { path: 'mobiles', loadChildren: () => import('./mobiles/mobiles.module').then(m => m.MobilesModule) },

  { path: 'tv', loadChildren: () => import('./tv/tv.module').then(m => m.TvModule) },

  { path: 'mob-accs', loadChildren: () => import('./mob-accs/mob-accs.module').then(m => m.MobAccsModule) },

  { path: 'speakers', loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersModule) },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
