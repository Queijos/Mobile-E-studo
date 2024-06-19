import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SashimiPageRoutingModule } from './sashimi-routing.module';

import { SashimiPage } from './sashimi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SashimiPageRoutingModule
  ],
  declarations: [SashimiPage]
})
export class SashimiPageModule {}
