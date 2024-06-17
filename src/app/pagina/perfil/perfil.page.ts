import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';
import { EditarPage } from './editar/editar.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: Cliente | null = null;

  constructor(private modalCtrl: ModalController, private service: ClienteService) { }

  ngOnInit() {
    // Recuperar os dados do usuário logado
    this.user = this.service.getUserData();
  }

  atualizar(user: Cliente) {
    this.modalCtrl.create({
      component: EditarPage,
      componentProps: { user }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({ data }) => {
      if (data) {
        // Atualizar os dados do cliente após a edição
        this.service.getById(user.id).subscribe(response => {
          this.user = response;
          // Atualizar os dados do cliente no armazenamento local
          this.service.saveUserData(this.user);
        });
      }
    });
  }

}
