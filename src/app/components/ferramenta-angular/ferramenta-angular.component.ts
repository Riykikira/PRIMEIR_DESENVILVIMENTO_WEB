import { Component, inject } from '@angular/core'; // Adicione 'inject'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrcamentoService } from '../../services/orcamento.service'; // 1. Importe o serviço

@Component({
  selector: 'app-ferramenta-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ferramenta-angular.component.html',
  styleUrls: ['./ferramenta-angular.component.css']
})
export class FerramentaAngularComponent {
  // 2. Injete o serviço
  private orcamentoService = inject(OrcamentoService); 
  
  constructor(private router: Router) { }

  features = [
    {
      icon: '⚙️',
      title: 'Tecnologia Avançada',
      description: 'Equipamentos de última geração para máxima precisão'
    },
    {
      icon: '🏆',
      title: 'Qualidade Garantida',
      description: 'Produtos testados e aprovados pelas normas técnicas'
    },
    {
      icon: '📊',
      title: 'Durabilidade',
      description: 'Resistência comprovada ao longo dos anos'
    },
    {
      icon: '🚀',
      title: 'Inovação',
      description: 'Constantemente melhorando nossos produtos'
    }
  ];

  specs = [
    'Resistência à compressão de até 10 MPa',
    'Dimensões precisas e padronizadas',
    'Materiais de alta qualidade',
    'Certificado pela ABNT',
    'Sustentável e ecológico',
    'Disponível em diversas cores'
  ];

  stats = [
    { value: '15+', label: 'Anos de Experiência' },
    { value: '1000+', label: 'Clientes Satisfeitos' },
    { value: '50000+', label: 'Blocos Produzidos' },
    { value: '99.9%', label: 'Taxa de Qualidade' }
  ];

  // 3. Crie a função para o botão
  solicitarOrcamentoGeral() {
    // Passamos uma mensagem genérica, pois estamos na seção da ferramenta
    this.orcamentoService.solicitarOrcamento('Soluções em Construção Civil');
  }

  verEspecificacoes() {
    this.router.navigate(['/catalogo']);
  }
}