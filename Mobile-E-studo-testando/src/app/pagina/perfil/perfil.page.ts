import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';
import { EditarPage } from './editar/editar.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  clientes: Cliente[] | undefined;
  constructor(private modalCtrl: ModalController, private service: ClienteService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.clientes = response;
    })
  }
    atualizar(c: Cliente){
      // console.log(c);
      this.modalCtrl.create({
        component: EditarPage,
        componentProps: {c}
      }).then (modal =>{
        modal.present();
        return modal.onDidDismiss();
      }).then(({data}) =>{
        //console.log(data);
        this.service.getAll().subscribe(response => {
          this.clientes = response;
        })
      })
    }
  }

  


