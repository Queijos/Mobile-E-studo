import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curso-japones',
  templateUrl: './curso-japones.page.html',
  styleUrls: ['./curso-japones.page.scss'],
})
export class CursoJaponesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openCuisine(cuisine: string) {
    if (cuisine === 'temaki') {
      this.navCtrl.navigateForward('/temaki');
    } else if (cuisine === 'sashimi') {
      this.navCtrl.navigateForward('/sashimi');
    } else if (cuisine === 'hot') {
      this.navCtrl.navigateForward('/hot');
}
}
}