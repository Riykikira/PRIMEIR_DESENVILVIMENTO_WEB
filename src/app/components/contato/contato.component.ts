import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrcamentoService, DadosOrcamento } from '../../services/orcamento.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  private orcamentoService = inject(OrcamentoService);

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  ngOnInit(): void {
    this.orcamentoService.orcamento$.subscribe((dados) => {
      const dadosOrcamento = dados as DadosOrcamento | null;
      if (dadosOrcamento) {
        this.formData.message = dadosOrcamento.mensagem;
      }
    });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.formData = { name: '', email: '', phone: '', message: '' };
    this.orcamentoService.limparOrcamento();
  }
}
