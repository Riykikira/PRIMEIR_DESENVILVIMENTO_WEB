import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@Component({
  selector: 'app-heroi',
  standalone: true,
  imports: [CommonModule],
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
