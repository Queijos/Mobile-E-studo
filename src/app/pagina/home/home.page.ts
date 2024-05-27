import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import  {IonItem} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public nav: NavController) {} 
    abrirPagina(x: any){
      this.nav.navigateForward(x);

    }
  ngOnInit() {
    const list: NodeListOf<Element> = document.querySelectorAll('.list');
    function activeLink(this: Element): void {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    }
    list.forEach((item)=> item.addEventListener('click',activeLink));
  }

}

