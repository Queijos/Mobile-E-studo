import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'people-circle' },
    { title: 'Cadastrar', url: '/cadastro', icon: 'people' },
    { title: 'Receitas', url: '/cursos', icon: 'fast-food' },
    { title: 'Perfil', url: '/perfil', icon: 'people' },
    { title: 'Feed de Receitas', url: '/feed', icon: ''}
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  cliente: Cliente | undefined;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    const clienteId = localStorage.getItem('clienteId'); // Supondo que o ID do cliente está armazenado no localStorage
    if (clienteId) {
      this.clienteService.getById(clienteId).subscribe(response => {
        this.cliente = response;
      });
    }
  }
}
