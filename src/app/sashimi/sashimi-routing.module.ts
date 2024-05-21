import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SashimiPage } from './sashimi.page';

const routes: Routes = [
  {
    path: '',
    component: SashimiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SashimiPageRoutingModule {}
