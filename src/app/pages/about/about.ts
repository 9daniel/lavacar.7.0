import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import { PassandoDadosService } from '../servicos/passando-dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})

export class AboutPage {

  public tipoVeiculo: string = 'carro';

  public listaCar = [
    
    { nome: 'Car',  valor: "350",  img: "assets/img/icones_pagina_reserva/1.jpg",  tipo:'carro' },
    { nome: 'Van',  valor: "450",  img: "assets/img/icones_pagina_reserva/2.jpg",  tipo:'van' },
    { nome: 'Moto', valor: "200",   img: "assets/img/icones_pagina_reserva/6.jpg", tipo:'moto' }
    
  ];// variavel do tipo array, contendo uma lista de pokemons.
  
  public listaTipoLimpeza = [
    
    { nome: 'Cristalização',           valor:"150"},
    { nome: 'Estofado',                valor:"50"},
    { nome: 'Polimento',               valor:"120"},
    { nome: 'Ar-condicionado',         valor:"50"},
    { nome: 'Troca de óleo',           valor:"130"},
    { nome: 'Enceramento',             valor:"100"}
    
  ];
  public listaTipoLimpezaMoto = [
    
    { nome: 'Cristalização',           valor:"150"},
    { nome: 'Polimento',               valor:"120"},
    { nome: 'Troca de óleo',           valor:"50"}

  ];
  conferenceDate = '2019-02-17';

  constructor(public popoverCtrl: PopoverController, public Dados: PassandoDadosService, public rota: Router) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  public pagamento(automovel){
        this.Dados.setDados('automovel',automovel);

  }
  
}
