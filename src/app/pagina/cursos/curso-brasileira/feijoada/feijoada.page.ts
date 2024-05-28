import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-feijoada',
  templateUrl: './feijoada.page.html',
  styleUrls: ['./feijoada.page.scss'],
})
export class FeijoadaPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPagina(x: any){
        this.nav.navigateForward(x);
      
      }
    ngOnInit() {
    }
  
  }
