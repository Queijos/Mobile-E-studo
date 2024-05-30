import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';
import { ModalclientePage } from './modalcliente/modalcliente.page';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
clientes: Cliente[] | undefined;
  constructor(private service: ClienteService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.clientes = response;
    })
  }
  remover(id: any){
    // console.log(id); // testa o id
    this.service.remove(id).subscribe(() => {
    //this.clientes = this.clientes?.filter(idcliente => idcliente.id !== id);
    this.service.getAll().subscribe(response => {
      this.clientes = response;
    })
    })

  }
  novoCliente(){
    this.modalCtrl.create({
      component: ModalclientePage
    }).then(modal =>{
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      //console.log(data);
      this.service.getAll().subscribe(response => {
        this.clientes = response;
      })
    })    
  }
  atualizar(c: Cliente){
    // console.log(c);
    this.modalCtrl.create({
      component: ModalclientePage,
      componentProps: {c}
    }).then(modal =>{
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
