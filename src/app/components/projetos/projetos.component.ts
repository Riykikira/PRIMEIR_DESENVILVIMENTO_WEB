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
      title: 'Elizabeth Cimentos',
      category: 'industrial',
      image: 'https://static.paraiba.pb.gov.br/2014/02/20.01.14-polo-cimenteiro_Fotos-aereas_fotos_Chic%C3%B3-Moura-2.jpg'
    },
    {
      title: 'Centro De convenções',
      category: 'Comercial',
      image: 'https://www.a12.com/source/files/originals/Centro_de_Convencoes_-_Joao_Pessoa-536531.jpg'
    },
    {
      title: 'Fábrica Da Geep',
      category: 'Industrial',
      image: 'https://stellantis3.dam-broadcast.com/medias/domain12808/media102746/824014-7qq703s6be-whr.jpg'
    }
  ];
}
