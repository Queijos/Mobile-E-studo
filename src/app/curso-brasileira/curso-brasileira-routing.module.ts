import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoBrasileiraPage } from './curso-brasileira.page';

const routes: Routes = [
  {
    path: '',
    component: CursoBrasileiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoBrasileiraPageRoutingModule {}
