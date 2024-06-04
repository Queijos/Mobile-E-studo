import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PudimPageRoutingModule } from './pudim-routing.module';

import { PudimPage } from './pudim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PudimPageRoutingModule
  ],
  declarations: [PudimPage]
})
export class PudimPageModule {}
