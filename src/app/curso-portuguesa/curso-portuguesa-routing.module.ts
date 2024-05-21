import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoPortuguesaPage } from './curso-portuguesa.page';

const routes: Routes = [
  {
    path: '',
    component: CursoPortuguesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoPortuguesaPageRoutingModule {}
