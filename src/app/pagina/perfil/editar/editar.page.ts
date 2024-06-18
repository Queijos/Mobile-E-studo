// editar.page.ts
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  @Input() cliente: Cliente | undefined;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  fecharModal() {
    this.modalCtrl.dismiss();
  }

  salvarAlteracoes() {
    // Lógica para salvar as alterações no cliente
    this.modalCtrl.dismiss({ data: true });
  }
}
