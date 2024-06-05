import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
@Input() c!: Cliente;
atualizar = false;
dados = {
  email: '',
  telefone: '',
}
  constructor(public nav: NavController, private modalCtrl: ModalController,private service: ClienteService) { }
  abrirPagina(x: any){
    this.nav.navigateForward(x);
  }
  ngOnInit() { 
     if(this.c){
     // console.log("Atualizar");
     this.atualizar = true;
     this.dados = this.c;
    }else{
      console.log("Novo Cliente")
    }
    }
  
     fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const cliente = form.value;
    if(this.atualizar){
      this.service.update(cliente, this.c.id).subscribe(response =>{
        this.modalCtrl.dismiss(response);
      })
    }else{
      this.service.create(cliente).subscribe(response =>{
        this.modalCtrl.dismiss(response);
      })
    }
  }
}
  
 

