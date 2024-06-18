import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Receita, ReceitaService } from 'src/app/servico/receitas.service';
import { ClienteService, Cliente } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage {
  receita: Receita = {
    receitaid: '',
    usuario_id: '',
    titulo: '',
    descricao: '',
    imagem: undefined
  };
  cliente: Cliente = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
    data_nasc: '',
    genero: '',
    senha: '',
    imagem: ''
  };

  constructor(public nav: NavController, private receitaService: ReceitaService, private clienteService: ClienteService) {
    const userData = this.clienteService.getUserData();
    if (userData) {
      this.receita.usuario_id = userData.id;
    }
  }

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

  criarReceita(): void {
    const formData = new FormData();
    if (this.receita.usuario_id) {
      formData.append('usuario_id', this.receita.usuario_id);
    }
    formData.append('titulo', this.receita.titulo);
    formData.append('descricao', this.receita.descricao);
    if (this.receita.imagem) {
      formData.append('imagem', this.receita.imagem);
    }

    this.receitaService.criarReceita(formData)
      .subscribe(
        (data) => {
          console.log('Receita criada com sucesso:', data);
          this.abrirPagina('feed');
        },
        (error) => {
          console.error('Erro ao criar a receita:', error);
        }
      );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.receita.imagem = file;
  }
}
