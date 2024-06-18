import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  @Input() clienteId: string | undefined;
  cliente: Cliente | undefined;

  constructor(
    private modalCtrl: ModalController,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    if (this.clienteId) {
      this.clienteService.getById(this.clienteId).subscribe(
        (cliente) => {
          this.cliente = cliente;
        },
        (error) => {
          console.error('Erro ao carregar cliente:', error);
        }
      );
    } else {
      console.error('ID do cliente não foi fornecido.');
    }
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }

  salvarAlteracoes() {
    if (this.cliente) {
      this.clienteService.update(this.cliente).subscribe(
        (clienteAtualizado) => {
          console.log('Cliente atualizado:', clienteAtualizado);
          this.modalCtrl.dismiss({ data: true });
        },
        (error) => {
          console.error('Erro ao salvar alterações do cliente:', error);
        }
      );
    } else {
      console.error('Cliente não está definido.');
    }
  }
}
