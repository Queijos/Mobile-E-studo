import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoJaponesPage } from './curso-japones.page';

const routes: Routes = [
  {
    path: '',
    component: CursoJaponesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoJaponesPageRoutingModule {}
