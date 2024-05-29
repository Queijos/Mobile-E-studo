import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrigadeiroPageRoutingModule } from './brigadeiro-routing.module';

import { BrigadeiroPage } from './brigadeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrigadeiroPageRoutingModule
  ],
  declarations: [BrigadeiroPage]
})
export class BrigadeiroPageModule {}
