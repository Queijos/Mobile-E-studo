import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homelogado',
  templateUrl: './homelogado.page.html',
  styleUrls: ['./homelogado.page.scss'],
})
export class HomelogadoPage implements OnInit {

  constructor(public nav: NavController) { }
  ngOnInit() {
  }
 abrirPagina(x: any){
    this.nav.navigateForward(x);
}
}
