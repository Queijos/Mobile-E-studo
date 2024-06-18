import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  clientes: Cliente[] | undefined;

  constructor(
    public nav: NavController, 
    private service: ClienteService, 
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  abrirPagina(x: any) {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
    // Se precisar carregar clientes ao iniciar a página, descomente a linha abaixo
    // this.service.getAll().subscribe(data => this.clientes = data);
  }

  async enviando(form: NgForm) {
    if (form.valid) {
      const cliente = form.value as Cliente;
      this.service.create(cliente).subscribe(
        async (response) => {
          const alert = await this.alertCtrl.create({
            header: 'Cadastro Concluído',
            message: 'Cadastro finalizado com sucesso.',
            buttons: ['OK']
          });
          await alert.present();
          this.modalCtrl.dismiss();
          this.nav.navigateRoot('/login'); // Navega para a página de login
        },
        async (error) => {
          const alert = await this.alertCtrl.create({
            header: 'Erro',
            message: 'Ocorreu um erro ao cadastrar. Tente novamente.',
            buttons: ['OK']
          });
          await alert.present();
        }
      );
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Formulário Inválido',
        message: 'Por favor, preencha todos os campos obrigatórios.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
