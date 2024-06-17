import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClienteService, Cliente } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-homelogado',
  templateUrl: './homelogado.page.html',
  styleUrls: ['./homelogado.page.scss'],
})
export class HomelogadoPage implements OnInit {
  user: Cliente | null = null;

  constructor(public nav: NavController, private clienteService: ClienteService) {}

  ngOnInit() {
    this.user = this.clienteService.getUserData();
  }

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

  logout() {
    this.clienteService.logout();
    this.abrirPagina('login');
  }
}

