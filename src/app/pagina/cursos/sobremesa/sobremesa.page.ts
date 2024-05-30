import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import  {IonItem} from '@ionic/angular';

@Component({
  selector: 'app-sobremesa',
  templateUrl: './sobremesa.page.html',
  styleUrls: ['./sobremesa.page.scss'],
})
export class SobremesaPage implements OnInit {

  constructor(public nav: NavController) {} 
    abrirPagina(x: any){
      this.nav.navigateForward(x);

    }
  ngOnInit() {
  }

}
