import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-curso-brasileira',
  templateUrl: './curso-brasileira.page.html',
  styleUrls: ['./curso-brasileira.page.scss'],
})
export class CursoBrasileiraPage implements OnInit {
  
  constructor(public nav: NavController) {} 
    abrirPagina(x: any){
      this.nav.navigateForward(x);

    }
  ngOnInit() {
  }

}
