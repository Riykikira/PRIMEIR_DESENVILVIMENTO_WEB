import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  highlights: string[] = [
    'Mais de 20 anos de experiência no mercado',
    'Tecnologia de ponta em produção',
    'Equipe altamente qualificada',
    'Compromisso com sustentabilidade',
    'Atendimento personalizado',
    'Entrega pontual garantida'
  ];

  stats = [
    { value: '20+', label: 'Anos de Mercado' },
    { value: '500+', label: 'Projetos Entregues' },
    { value: '100%', label: 'Clientes Satisfeitos' },
    { value: '50+', label: 'Colaboradores' }
  ];
}
