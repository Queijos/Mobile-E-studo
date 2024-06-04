import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClienteService, Cliente } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cliente: Cliente | undefined;

  constructor(public nav: NavController, private clienteService: ClienteService) {}

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
    const clienteId = localStorage.getItem('clienteId'); // Supondo que o ID do cliente está armazenado no localStorage
    if (clienteId) {
      this.clienteService.getById(clienteId).subscribe(response => {
        this.cliente = response;
      });
    }
  }
}
