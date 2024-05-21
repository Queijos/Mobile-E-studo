import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  openCuisine(cuisine: string) {
    if (cuisine === 'Brasileira') {
      this.navCtrl.navigateForward('/curso-brasileira');
    } else if (cuisine === 'Japonesa') {
      this.navCtrl.navigateForward('/curso-japones');
    } else if (cuisine === 'Portuguesa') {
      this.navCtrl.navigateForward('/curso-portuguesa');
  }
}
}