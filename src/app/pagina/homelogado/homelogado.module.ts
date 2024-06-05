import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomelogadoPageRoutingModule } from './homelogado-routing.module';

import { HomelogadoPage } from './homelogado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomelogadoPageRoutingModule
  ],
  declarations: [HomelogadoPage]
})
export class HomelogadoPageModule {}
