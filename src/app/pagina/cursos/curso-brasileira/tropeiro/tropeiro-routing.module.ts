import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TropeiroPage } from './tropeiro.page';

const routes: Routes = [
  {
    path: '',
    component: TropeiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TropeiroPageRoutingModule {}
