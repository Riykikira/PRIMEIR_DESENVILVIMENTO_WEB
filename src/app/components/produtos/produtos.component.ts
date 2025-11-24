import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoService } from '../../services/orcamento.service';

interface Product {
  icon: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  private orcamentoService = inject(OrcamentoService);
  products: Product[] = [
    {
      icon: 'building',
      title: 'Blocos de Concreto',
      description: 'Blocos estruturais e de vedação com alta resistência e acabamento perfeito.',
      image: 'https://loja.tatu.com.br/wp-content/uploads/2021/04/17-Bloco-de-Concreto-2.png'
    },
    {
      icon: 'boxes',
      title: 'Pavimentos',
      description: 'Peças intertravadas para pisos externos com design moderno e durabilidade.',
      image: 'https://www.millato.com.br/assets/uploads/produtos/millato-Produtos-13092019180936.png'
    },
    {
      icon: 'grid',
      title: 'bloco estrutural',
      description: 'Cobogós e elementos decorativos que unem funcionalidade e estética.',
      image: 'https://images.tcdn.com.br/img/img_prod/1243088/meio_bloco_estrutural_19x19x19_2435_1_2b11f8069707ff95ad7dc8da081e76f3.jpg'
    },
    {
      icon: 'layers',
      title: ' canaleta vedação ',
      description: 'Soluções customizadas em concreto para projetos especiais.',
      image: 'https://d1p6nzzdute2g.cloudfront.net/lojas/loja-2082/a62589db-e350-4cbc-9456-5c4dbb409758'
    }
  ];

  solicitarOrcamento(nomeProduto: string): void {
    this.orcamentoService.solicitarOrcamento(nomeProduto);
  }
}
