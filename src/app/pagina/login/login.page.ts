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
    this.clienteService.login(this.email, this.senha).subscribe(
      response => {
        if (response.success) {
          // login bem-sucedido
          console.log('Login realizado com sucesso!');
          console.log('ID do usuário:', response.id);
          console.log('Nome do usuário:', response.nome);
          // Redirecionar para a página 'homelogado' ou fazer qualquer outra ação necessária
          this.abrirPagina('homelogado');
        } else {
          // falha no login, mostrar mensagem de erro
          alert('Email ou senha incorretos. Tente novamente.');
        }
      },
      error => {
        // lidar com erros de rede ou outros erros inesperados
        console.error('Erro ao tentar fazer login', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
      }
    );
  }
}
