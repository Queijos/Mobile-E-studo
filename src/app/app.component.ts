import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'people-circle' },
    { title: 'Cadastrar', url: '/cadastro', icon: 'people' },
    { title: 'Receitas', url: '/cursos', icon: 'fast-food' },
    { title: 'Perfil', url: '/perfil', icon: 'people' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
