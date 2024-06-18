import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Receita, ReceitaService } from 'src/app/servico/receitas.service';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage {
  receita: Receita = {
    receitaid: '', // O receitaid será gerado pelo backend
    titulo: '',
    descricao: '',
    imagem: ''
  };

  constructor(public nav: NavController, private receitaService: ReceitaService) {}

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

  criarReceita(): void {
    const formData = new FormData();
    formData.append('titulo', this.receita.titulo);
    formData.append('descricao', this.receita.descricao);
    formData.append('imagem', this.receita.imagem); // Adiciona a imagem ao FormData

    this.receitaService.criarReceita(formData)
      .subscribe(
        (data) => {
          console.log('Receita criada com sucesso:', data);

          // Redirecionar para a página de feed após a criação da receita
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
