import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotPageRoutingModule } from './hot-routing.module';

import { HotPage } from './hot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotPageRoutingModule
  ],
  declarations: [HotPage]
})
export class HotPageModule {}
