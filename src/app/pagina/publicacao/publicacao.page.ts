import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage implements OnInit {

  constructor(public nav: NavController) {}

  ngOnInit() {
  }

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

}
