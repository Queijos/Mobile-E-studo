import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';
import { Receita, ReceitaService } from 'src/app/servico/receitas.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  receitas: Receita[] = []
  cliente: Cliente | undefined;
  user: Cliente | null = null;

  constructor(
    public nav: NavController,
    private receitaService: ReceitaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
    this.user = this.clienteService.getUserData();
    this.carregarReceitas();
  }

  carregarReceitas() {
    this.receitaService.getReceitas().subscribe(
      (data: Receita[]) => {
        this.receitas = data;
      },
      (error) => {
        console.error('Erro ao buscar receitas:', error);
      }
    );
  }

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

  abrirDetalhes(receitaId: string) {
    this.nav.navigateForward(`/detalhes/${receitaId}`);
  }

  // Função para criar uma nova receita com imagem
  criarReceitaComImagem(receita: FormData) {
    this.receitaService.criarReceitaComImagem(receita).subscribe(
      (response) => {
        if (response.success) {
          console.log('Receita criada com sucesso!');
          // Recarrega as receitas após a criação
          this.carregarReceitas();
        } else {
          console.error('Erro ao criar a receita:', response.message);
        }
      },
      (error) => {
        console.error('Erro ao criar a receita:', error);
      }
    );
  }
  
}
