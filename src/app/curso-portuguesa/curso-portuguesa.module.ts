import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPortuguesaPageRoutingModule } from './curso-portuguesa-routing.module';

import { CursoPortuguesaPage } from './curso-portuguesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPortuguesaPageRoutingModule
  ],
  declarations: [CursoPortuguesaPage]
})
export class CursoPortuguesaPageModule {}
