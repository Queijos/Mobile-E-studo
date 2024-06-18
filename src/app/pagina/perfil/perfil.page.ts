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
          this.clienteService.getById(cliente.id).subscribe(response => {
            this.cliente = response;
          });
        }
      });
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileToUpload = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.cliente) {
          this.cliente.imagem = e.target.result;
          // Atualize a imagem do cliente no servidor
          if (this.fileToUpload) {
            this.clienteService.uploadImage(this.fileToUpload, this.cliente.id).subscribe(() => {
              console.log('Imagem atualizada com sucesso.');
            }, error => {
              console.error('Erro ao atualizar imagem:', error);
            });
          }
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
