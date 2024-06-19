import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage {

  constructor(private alertController: AlertController, private router: Router) { }

  async processarPagamento(event: Event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Pagamento realizado com sucesso!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/home']);
        }
      }]
    });

    await alert.present();
  }

}