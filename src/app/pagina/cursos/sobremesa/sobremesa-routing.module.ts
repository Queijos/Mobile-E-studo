import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobremesaPage } from './sobremesa.page';

const routes: Routes = [
  {
    path: '',
    component: SobremesaPage
  },  {
    path: 'cookies',
    loadChildren: () => import('./cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'sorvete',
    loadChildren: () => import('./sorvete/sorvete.module').then( m => m.SorvetePageModule)
  },
  {
    path: 'pudim',
    loadChildren: () => import('./pudim/pudim.module').then( m => m.PudimPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobremesaPageRoutingModule {}
