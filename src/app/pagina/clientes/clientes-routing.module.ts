import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage
  },
  {
    path: 'modalcliente',
    loadChildren: () => import('./modalcliente/modalcliente.module').then( m => m.ModalclientePageModule)
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
