import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosPage } from './CursosPage';

const routes: Routes = [
  {
    path: '',
    component: CursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosPageRoutingModule {}
