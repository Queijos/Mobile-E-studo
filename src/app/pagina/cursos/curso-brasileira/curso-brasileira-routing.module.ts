import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoBrasileiraPage } from './curso-brasileira.page';

const routes: Routes = [
  {
    path: '',
    component: CursoBrasileiraPage
  },
  {
    path: 'feijoada',
    loadChildren: () => import('./categorias/feijoada/feijoada.module').then( m => m.FeijoadaPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoBrasileiraPageRoutingModule {}
