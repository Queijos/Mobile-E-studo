import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(public nav: NavController, private clienteService: ClienteService) {}

  ngOnInit() {}

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

  login() {
    this.clienteService.login(this.email, this.senha).subscribe((response) => {
      if (response.success) {
        // login bem-sucedido
        this.abrirPagina('home');
      } else {
        // falha no login, mostrar mensagem de erro
        alert('Email ou senha incorretos. Tente novamente.');
      }
    }, (error) => {
      // lidar com erros de rede ou outros erros inesperados
      console.error('Erro ao tentar fazer login', error);
      alert('Ocorreu um erro. Tente novamente mais tarde.');
    });
  }
}
