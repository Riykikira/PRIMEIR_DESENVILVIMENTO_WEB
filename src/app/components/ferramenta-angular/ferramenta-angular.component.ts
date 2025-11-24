import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-ferramenta-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ferramenta-angular.component.html',
  styleUrls: ['./ferramenta-angular.component.css']
})
export class FerramentaAngularComponent {
  features: Feature[] = [
    {
      icon: 'ruler',
      title: 'Precisão Absoluta',
      description: 'Ângulos perfeitos em cada aplicação'
    },
    {
      icon: 'shield',
      title: 'Alta Durabilidade',
      description: 'Resistente a desgaste e impactos'
    },
    {
      icon: 'zap',
      title: 'Produtividade',
      description: 'Agiliza processos de construção'
    }
  ];

  specs: string[] = [
    'Material de alta resistência',
    'Acabamento profissional',
    'Fácil manuseio',
    'Certificação de qualidade'
  ];

  stats = [
    { value: '100%', label: 'Precisão' },
    { value: '5x', label: 'Mais Rápido' },
    { value: '10 anos', label: 'Garantia' },
    { value: '10k+', label: 'Obras Realizadas' }
  ];
}
