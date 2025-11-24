import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * COMPONENTE DE AUTENTICAÇÃO (AuthComponent)
 * 
 * Este componente gerencia tanto login quanto cadastro de empresas.
 * 
 * Funcionalidades:
 * - Exibir formulário de login/cadastro
 * - Alternar entre modos login e cadastro
 * - Validar campos obrigatórios
 * - Chamar serviço de autenticação
 * - Redirecionar após sucesso
 * 
 * Rota: /auth
 */
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  // Injeção de dependências
  private router = inject(Router);             // Para navegação
  private authService = inject(AuthService);   // Para autenticação

  // Propriedades do componente
  isLogin = true;   // Controla se está em modo login (true) ou cadastro (false)
  loading = false;  // Mostra "Processando..." enquanto aguarda a resposta

  // Dados do formulário
  formData = {
    email: '',              // CNPJ (no formulário aparece como "email")
    password: '',           // Número do contrato (aparece como "password")
    confirmPassword: '',    // Confirmação do contrato (apenas cadastro)
    fullName: ''           // Nome da empresa (apenas cadastro)
  };

  /**
   * Alterna entre modo LOGIN e modo CADASTRO
   * 
   * Quando clicado o botão "Não tem conta? Cadastre-se"
   * ou "Já tem conta? Faça login"
   */
  toggleMode(): void {
    this.isLogin = !this.isLogin;
    // Limpa os campos ao alternar
    this.formData = {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    };
  }

  /**
   * Valida e envia o formulário
   * Decide se é login ou cadastro baseado em isLogin
   */
  onSubmit(): void {
    if (this.isLogin) {
      this.handleLogin();      // Envia como login
    } else {
      this.handleSignup();     // Envia como cadastro
    }
  }

  /**
   * Processa LOGIN
   * 
   * Validações:
   * 1. Verifica se CNPJ está preenchido
   * 2. Verifica se Número do Contrato está preenchido
   * 
   * Se validado:
   * 1. Mostra "Processando..."
   * 2. Aguarda 1 segundo (simula requisição)
   * 3. Chama AuthService.login()
   * 4. Mostra mensagem de sucesso
   * 5. Redireciona para /logado
   */
  handleLogin(): void {
    // Validação de campos obrigatórios
    if (!this.formData.email || !this.formData.password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    // Ativa o estado de carregamento
    this.loading = true;
    
    // Simula uma requisição HTTP (em produção seria uma chamada real)
    setTimeout(() => {
      // Chama o serviço de autenticação
      // Parâmetros: CNPJ e Número do Contrato
      this.authService.login(this.formData.email, this.formData.password);
      
      // Desativa o estado de carregamento
      this.loading = false;
      
      // Mostra mensagem de sucesso
      alert('Login realizado com sucesso!');
      
      // Redireciona para o dashboard
      this.router.navigate(['/logado']);
    }, 1000);
  }

  /**
   * Processa CADASTRO
   * 
   * Validações:
   * 1. Verifica se os números do contrato coincidem
   * 
   * Se validado:
   * 1. Mostra "Processando..."
   * 2. Aguarda 1 segundo
   * 3. Mostra mensagem de sucesso
   * 4. Volta para modo LOGIN
   * 
   * Nota: No futuro, isso deveria fazer login automático
   */
  handleSignup(): void {
    // Validação: as senhas/contratos devem coincidir
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Os números do contrato não coincidem');
      return;
    }

    // Ativa o estado de carregamento
    this.loading = true;
    
    // Simula uma requisição HTTP
    setTimeout(() => {
      // Desativa o estado de carregamento
      this.loading = false;
      
      // Mostra mensagem de sucesso
      alert('Conta criada com sucesso!');
      
      // Volta para modo LOGIN para o usuário fazer login
      this.isLogin = true;
    }, 1000);
  }
}
