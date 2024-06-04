import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {
  
  constructor(public nav: NavController) {}

  ngOnInit() {
  }

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

}
