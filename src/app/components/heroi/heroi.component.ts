import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Alteração: Importado RouterLink para permitir navegação por roteamento no template
import { RouterLink } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { HeroCarouselComponent } from "../hero-carousel/hero-carousel";

@Component({
  selector: 'app-heroi',
  standalone: true,
  // Alteração: Adicionado RouterLink aos imports para usar routerLink no template
  imports: [CommonModule, RouterLink, HeroCarouselComponent],
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
  
})
export class HeroiComponent {
  private numeroTelefone = '558391877515';
CabecalhoComponent: any;

  contato(): void {
    const mensagem = 'Olá! Gostaria de conhecer mais sobre os produtos da Interblock.';
    const linkWhatsapp = `https://wa.me/${this.numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(linkWhatsapp, '_blank');
  }
  CatalogoComponent: any;

}
