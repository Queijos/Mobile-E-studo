import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatoPage } from './pato.page';

const routes: Routes = [
  {
    path: '',
    component: PatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatoPageRoutingModule {}
