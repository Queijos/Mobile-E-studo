import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeijoadaPage } from './feijoada.page';

const routes: Routes = [
  {
    path: '',
    component: FeijoadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeijoadaPageRoutingModule {}
