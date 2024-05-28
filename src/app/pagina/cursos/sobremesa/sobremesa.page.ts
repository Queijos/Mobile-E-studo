import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sobremesa',
  templateUrl: './sobremesa.page.html',
  styleUrls: ['./sobremesa.page.scss'],
})
export class SobremesaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 
  ],
})
export class ListingPageRoutingModule {}
