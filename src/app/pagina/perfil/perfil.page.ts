import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';
import { EditarPage } from './editar/editar.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  cliente: Cliente | undefined;

  constructor(public nav: NavController, private modalCtrl: ModalController, private service: ClienteService) { }

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }
  
  ngOnInit() {
    // Supondo que você tem uma forma de obter o ID do cliente atual
    const clienteId = '1'; // Substitua pelo ID real do cliente

    this.service.getById(clienteId).subscribe(response => {
      this.cliente = response;
    });
  }

  atualizar(cliente: Cliente, id: any) {
    this.modalCtrl.create({
      component: EditarPage,
      componentProps: { cliente }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({ data }) => {
      if (data) {
        // Atualizar os dados do cliente após a edição
        this.service.getById(cliente.id).subscribe(response => {
          this.cliente = response;
        });
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.cliente) {
          this.cliente.imagem = e.target.result;
          // Atualize a imagem do cliente no servidor
          this.service.update(this.cliente, this.cliente.id).subscribe();
        }
      };
      reader.readAsDataURL(file);
    }
  }
  
}
