import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Interface que define a estrutura de dados de uma empresa logada
 * Contém informações como CNPJ, contrato, saldo de blocos, pedidos, etc.
 */
export interface EmpresaLogin {
  cnpj: string;                           // CNPJ da empresa
  numeroContrato: string;                 // Número único do contrato
  nomeEmpresa?: string;                   // Nome fantasia da empresa
  saldoBlocos?: number;                   // Quantidade de blocos disponíveis em estoque
  quantidadePedidos?: number;             // Total de pedidos realizados
  numeroNotasFiscais?: number[];          // Array com números das notas fiscais
  quantidadeEntregas?: number;            // Total de entregas realizadas
  notasDevolvidas?: number;               // Total de notas devolvidas
}

/**
 * SERVIÇO DE AUTENTICAÇÃO (AuthService)
 * 
 * Responsabilidades:
 * - Gerenciar o login e logout de empresas
 * - Armazenar dados da empresa logada
 * - Controlar o estado de autenticação
 * - Compartilhar dados entre componentes via RxJS Observables
 * 
 * Este serviço é injetado em toda a aplicação (providedIn: 'root')
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BehaviorSubject que armazena os dados da empresa logada
  // Permite que todos os componentes recebam atualizações em tempo real
  private empresaLogadaSubject = new BehaviorSubject<EmpresaLogin | null>(null);
  public empresaLogada$ = this.empresaLogadaSubject.asObservable();

  // BehaviorSubject que controla se o usuário está autenticado ou não
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  /**
   * Função de LOGIN
   * 
   * @param cnpj - CNPJ inserido no formulário
   * @param numeroContrato - Número do contrato inserido no formulário
   * 
   * O que acontece:
   * 1. Cria um objeto simulado (mock) com dados da empresa
   * 2. Gera dados aleatórios para simular um banco de dados real
   * 3. Armazena os dados no BehaviorSubject
   * 4. Marca a autenticação como verdadeira
   * 5. Salva os dados no localStorage (para persistência)
   */
  login(cnpj: string, numeroContrato: string): void {
    // Simula dados de uma empresa real com base no CNPJ inserido
    const empresaMock: EmpresaLogin = {
      cnpj: cnpj,
      numeroContrato: numeroContrato,
      nomeEmpresa: 'Empresa ' + cnpj.substring(0, 5),  // Gera nome baseado no CNPJ
      saldoBlocos: Math.floor(Math.random() * 5000) + 1000,  // Entre 1000 e 6000 blocos
      quantidadePedidos: Math.floor(Math.random() * 50) + 5,  // Entre 5 e 55 pedidos
      numeroNotasFiscais: [
        Math.floor(Math.random() * 10000),  // Número aleatório para NF 1
        Math.floor(Math.random() * 10000),  // Número aleatório para NF 2
        Math.floor(Math.random() * 10000)   // Número aleatório para NF 3
      ],
      quantidadeEntregas: Math.floor(Math.random() * 30) + 10,  // Entre 10 e 40 entregas
      notasDevolvidas: Math.floor(Math.random() * 5)  // Entre 0 e 4 devoluções
    };

    // Atualiza o BehaviorSubject com os dados da empresa
    this.empresaLogadaSubject.next(empresaMock);
    // Marca o usuário como autenticado
    this.isAuthenticatedSubject.next(true);
    // Salva os dados no localStorage para persistência entre recargas
    localStorage.setItem('empresaLogada', JSON.stringify(empresaMock));
  }

  /**
   * Função de LOGOUT
   * 
   * O que acontece:
   * 1. Remove os dados da empresa do BehaviorSubject
   * 2. Marca a autenticação como falsa
   * 3. Remove os dados do localStorage
   */
  logout(): void {
    this.empresaLogadaSubject.next(null);           // Limpa dados da empresa
    this.isAuthenticatedSubject.next(false);        // Marca como não autenticado
    localStorage.removeItem('empresaLogada');       // Remove do armazenamento local
  }

  /**
   * Retorna os dados da empresa logada
   * Útil quando você precisa acessar os dados sem se inscrever em observables
   */
  getEmpresaLogada(): EmpresaLogin | null {
    return this.empresaLogadaSubject.value;
  }

  /**
   * Verifica se o usuário está autenticado
   * Retorna true se autenticado, false caso contrário
   */
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}

