import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Receita, ReceitaService } from 'src/app/servico/receitas.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  receitas: Receita[] = [];

  constructor(
    public nav: NavController,
    private receitaService: ReceitaService
  ) {}

  ngOnInit() {
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

  ionViewWillEnter() {
    // Atualiza as receitas sempre que a página é acessada
    this.carregarReceitas();
  }
}
