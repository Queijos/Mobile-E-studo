import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Cliente = {
    email: '',
    senha: '',
    id: '',
    nome: '',
    telefone: '',
    data_nasc: '',
    genero: ''
  };

  constructor(public nav: NavController,private modalCtrl: ModalController, private clienteService: ClienteService
  ) {}

ngOnInit() {}

abrirPagina(x: any){
        this.nav.navigateForward(x);
}
login() {
  this.clienteService.login(this.user).subscribe((response) =>{
    if(response){
      //login bem-sucedido
      this.abrirPagina('homelogado');
    }else{
      //falha no login
    }
  })
}
      
  
  }
