import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { HeroiComponent } from '../../components/heroi/heroi.component';
import { FerramentaAngularComponent } from '../../components/ferramenta-angular/ferramenta-angular.component';
import { ProdutosComponent } from '../../components/produtos/produtos.component';
import { SobreComponent } from '../../components/sobre/sobre.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { ContatoComponent } from '../../components/contato/contato.component';
import { RodapeComponent } from '../../components/rodape/rodape.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    HeroiComponent,
    FerramentaAngularComponent,
    ProdutosComponent,
    SobreComponent,
    ProjetosComponent,
    ContatoComponent,
    RodapeComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
