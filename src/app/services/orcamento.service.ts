import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DadosOrcamento {
  produto: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private orcamentoSubject = new BehaviorSubject<DadosOrcamento | null>(null);
  public orcamento$ = this.orcamentoSubject.asObservable();

  solicitarOrcamento(produto: string): void {
    const dados: DadosOrcamento = {
      produto,
      mensagem: `Gostaria de solicitar um orçamento para: ${produto}`
    };
    
    this.orcamentoSubject.next(dados);
    this.scrollParaContato();
  }

  private scrollParaContato(): void {
    setTimeout(() => {
      const elemento = document.getElementById('contato');
      
      if (elemento) {
        elemento.scrollIntoView({ 
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  limparOrcamento(): void {
    this.orcamentoSubject.next(null);
  }
}

