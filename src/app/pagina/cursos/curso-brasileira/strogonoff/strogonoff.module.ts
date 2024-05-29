import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrogonoffPageRoutingModule } from './strogonoff-routing.module';

import { StrogonoffPage } from './strogonoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrogonoffPageRoutingModule
  ],
  declarations: [StrogonoffPage]
})
export class StrogonoffPageModule {}
