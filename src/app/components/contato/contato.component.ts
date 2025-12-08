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
    if (!this.formData.name || !this.formData.phone) {
       alert('Por favor, preencha pelo menos nome e telefone.');
       return;
    }
    const numeroTelefone = '558391877515'; 
    const mensagem = `
Olá! Gostaria de solicitar um orçamento/contato.

Dados do Cliente:
 Nome: ${this.formData.name}
 Email: ${this.formData.email}
 Telefone: ${this.formData.phone}

Mensagem:
${this.formData.message}
    `.trim();

    // 3. Codifique a mensagem para URL (transforma espaços em %20, etc)
    const linkWhatsapp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

    // 4. Abre o WhatsApp em uma nova aba
    window.open(linkWhatsapp, '_blank');

    // 5. Limpa o formulário e reseta o serviço (opcional, se quiser manter)
    this.formData = { name: '', email: '', phone: '', message: '' };
    this.orcamentoService.limparOrcamento();
  }
}