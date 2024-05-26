import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlTree } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
clientes: Cliente[] | undefined
constructor(public nav: NavController, private service: ClienteService, private modalCtrl: ModalController) { }
alertButtons = ['Confirmar'];
abrirPagina(x: any){
      this.nav.navigateForward(x);
    
    }
  ngOnInit() {
  }
  enviando(form: NgForm){
    console.log(form.value);
    const cliente = form.value;
    this.service.create(cliente).subscribe(response =>{
      this.modalCtrl.dismiss();
    })
  }
}