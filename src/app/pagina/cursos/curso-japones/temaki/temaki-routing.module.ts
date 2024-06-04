import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemakiPage } from './temaki.page';

const routes: Routes = [
  {
    path: '',
    component: TemakiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemakiPageRoutingModule {}
