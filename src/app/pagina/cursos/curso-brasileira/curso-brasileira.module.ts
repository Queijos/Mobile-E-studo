import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoBrasileiraPageRoutingModule } from './curso-brasileira-routing.module';

import { CursoBrasileiraPage } from './curso-brasileira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoBrasileiraPageRoutingModule
  ],
  declarations: [CursoBrasileiraPage]
})
export class CursoBrasileiraPageModule {}
