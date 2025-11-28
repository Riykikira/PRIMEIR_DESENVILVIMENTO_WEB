import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService, EmpresaLogin } from '../../services/auth.service';

/**
 * COMPONENTE DE DASHBOARD LOGADO (LogadoComponent)
 * 
 * Este componente exibe o painel administrativo para empresas logadas.
 * 
 * Funcionalidades:
 * - Exibir informações da empresa (CNPJ, contrato, nome)
 * - Mostrar resumo da conta (saldo de blocos, pedidos, entregas, etc)
 * - Exibir tabela de notas fiscais
 * - Permitir logout
 * - Verificar autenticação (redireciona para login se não autenticado)
 * 
 * Rota: /logado
 */
@Component({
  selector: 'app-logado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {
  // Injeção de dependências
  private authService = inject(AuthService);  // Serviço de autenticação
  private router = inject(Router);             // Serviço de roteamento

  // Propriedades do componente
  empresa: EmpresaLogin | null = null;  // Dados da empresa logada
  menuOpen = false;                      // Controla se o menu está aberto (mobile)
  today = new Date();                    // Data de hoje para exibir nas tabelas

  /**
   * Função que executa quando o componente é inicializado
   * 
   * O que acontece:
   * 1. Recupera os dados da empresa do serviço de autenticação
   * 2. Se a empresa não existe (não está logada), redireciona para login
   */
  ngOnInit(): void {
    // Tenta recuperar os dados da empresa logada
    this.empresa = this.authService.getEmpresaLogada();
    
    // Se não há empresa logada, redireciona para a página de autenticação
    if (!this.empresa) {
      this.router.navigate(['/auth']);
    }
  }

  /**
   * Toggle do menu mobile
   * Alterna entre menu aberto e fechado
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Fecha o menu mobile
   * Útil quando o usuário clica em um item do menu
   */
  closeMenu(): void {
    this.menuOpen = false;
  }

  /**
   * Função de LOGOUT
   * 
   * O que acontece:
   * 1. Chama o método logout do AuthService
   * 2. Limpa os dados da empresa
   * 3. Redireciona o usuário para a página de autenticação
   */
  logout(): void {
    this.authService.logout();           // Limpa dados de autenticação
    this.router.navigate(['/auth']);     // Redireciona para login
  }
}
