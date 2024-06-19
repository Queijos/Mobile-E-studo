import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeijoadaPageRoutingModule } from './feijoada-routing.module';

import { FeijoadaPage } from './feijoada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeijoadaPageRoutingModule
  ],
  declarations: [FeijoadaPage]
})
export class FeijoadaPageModule {}
