import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPagina(x: any){
        this.nav.navigateForward(x);
      
      }
    ngOnInit() {
    }
  
  }
