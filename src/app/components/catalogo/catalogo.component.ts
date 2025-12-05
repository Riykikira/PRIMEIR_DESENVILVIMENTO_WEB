import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  resistencia: string;
  dimensoes: string;
  preco?: string;
  imagem: string;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  categoriaAtiva: string = 'todos';
  
  categorias = [
    { id: 'todos', nome: 'Todos os Produtos' },
    { id: 'estrutural', nome: 'Blocos Estruturais' },
    { id: 'vedacao', nome: 'Blocos de Vedação' },
    { id: 'decorativo', nome: 'Blocos Decorativos' },
    { id: 'lajes', nome: 'Lajes Pré-moldadas' }
  ];

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Bloco Inteiro 14x19x39',
      categoria: 'estrutural',
      descricao: '#',
      resistencia: '4,0 até 10MPa',
      dimensoes: '14x19x39 cm',
      preco: 'R$ 3,50',
      imagem: 'assets/images/shopping.webp'
   
    },
    {
      id: 2,
      nome: 'Meio bloco ',
      categoria: 'estrutural',
      descricao: '#',
      resistencia: '8 MPa',
      dimensoes: '14x19x78 cm',
      preco: 'R$ 6,50',
      imagem: 'https://www.blocosoriente.com.br/wp-content/uploads/2024/06/meiobloco2.png'
    },
    {
      id: 3,
      nome: 'Bloco Calha 9x19x39',
      categoria: 'estrutural',
      descricao: '#',
      resistencia: '4 MPa',
      dimensoes: '9x19x39 cm',
      preco: 'R$ 1,80',
      imagem: 'https://www.333obra.com.br/media/catalog/product/5/0/5042.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
      id: 4,
      nome: 'Meio Bloco calha',
      categoria: 'estrutural',
      descricao: '#',
      resistencia: '5 MPa',
      dimensoes: '9x19x78 cm',
      preco: 'R$ 3,20',
      imagem: 'https://cdn.leroymerlin.com.br/products/meia_canaleta_estrutural_9x19x19cm_ivemar_89071010_bc07_600x600.jpg'
    },
    {
      id: 5,
      nome: 'Bloco Compensador',
      categoria: 'estrutural',
      descricao: '#',
      resistencia: '5 MPa',
      dimensoes: '14x14x14 cm',
      preco: 'R$ 4,20',
      imagem: 'https://www.blocosmaua.com.br/wp-content/uploads/2023/05/blocos-maua-produtos-bloco-compensador.jpg'
    },
    {
      id: 6,
      nome: 'Piso Brick',
      categoria: 'vedação',
      descricao: '#',
      resistencia: '5 MPa',
      dimensoes: '14x14x14 cm',
      preco: 'R$ 5,50',
      imagem: 'data:image/jpeg;base64,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'
    },
    {
      id: 7,
      nome: 'MEEIO',
      categoria: 'lajes',
      descricao: 'Laje pré-moldada para pisos e coberturas',
      resistencia: '8 MPa',
      dimensoes: 'Espessura: 12 cm',
      preco: 'R$ 45,00',
      imagem: 'https://via.placeholder.com/300x200?text=Laje+Padrao'
    },
    {
      id: 8,
      nome: 'Laje Pré-moldada Reforçada',
      categoria: 'lajes',
      descricao: 'Laje reforçada para vãos maiores',
      resistencia: '10 MPa',
      dimensoes: 'Espessura: 15 cm',
      preco: 'R$ 60,00',
      imagem: 'https://via.placeholder.com/300x200?text=Laje+Reforcada'
    }
  ];

  get produtosFiltrados() {
    if (this.categoriaAtiva === 'todos') {
      return this.produtos;
    }
    return this.produtos.filter(p => p.categoria === this.categoriaAtiva);
  }

  filtrarCategoria(categoria: string) {
    this.categoriaAtiva = categoria;
  }
}

