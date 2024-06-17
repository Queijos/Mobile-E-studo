import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrigadeiroPage } from './brigadeiro.page';

const routes: Routes = [
  {
    path: '',
    component: BrigadeiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrigadeiroPageRoutingModule {}
