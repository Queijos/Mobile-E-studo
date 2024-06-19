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
  cliente: Cliente | null = null;
  fileToUpload: File | null = null;
  
  constructor(
    private modalCtrl: ModalController,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const userData = this.clienteService.getUserData();
    if (userData && userData.id) {
      this.clienteService.getById(userData.id).subscribe(response => {
        this.cliente = response;
      });
    }
  }

  atualizar(cliente: Cliente | null) {
    if (cliente) {
      this.modalCtrl.create({
        component: EditarPage,
        componentProps: { cliente }
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({ data }) => {
        if (data) {
          // Atualizar os dados do cliente após a edição
          this.loadUserData();
        }
      });
    }
  }
}
