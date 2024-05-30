import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoJaponesPageRoutingModule } from './curso-japones-routing.module';

import { CursoJaponesPage } from './curso-japones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoJaponesPageRoutingModule
  ],
  declarations: [CursoJaponesPage]
})
export class CursoJaponesPageModule {}
