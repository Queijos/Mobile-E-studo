import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PudimPage } from './pudim.page';

const routes: Routes = [
  {
    path: '',
    component: PudimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PudimPageRoutingModule {}
