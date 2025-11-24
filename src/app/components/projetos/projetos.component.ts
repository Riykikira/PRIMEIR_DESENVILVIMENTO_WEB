import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  image?: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
  
})
export class ProjetosComponent {
  projects: Project[] = [
    {
      title: 'Condomínio Residencial Premium',
      category: 'Residencial',
      image: 'https://img.olx.com.br/images/42/424500825684203.webp'
    },
    {
      title: 'Centro Comercial Moderno',
      category: 'Comercial',
      image: 'https://s2-g1.glbimg.com/QnnLaMiweDuLNYMLk0tn9aavDCI=/0x0:2000x1333/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/2/V/Rj2N5UQxy3Nzbs5AAEbA/foto-1.jpg'
    },
    {
      title: 'Complexo Industrial',
      category: 'Industrial',
      image: 'https://www.dinizengenharia.com.br/imagens/informacoes/empresa-engenharia-civil-recife-01.jpg'
    }
  ];
}
