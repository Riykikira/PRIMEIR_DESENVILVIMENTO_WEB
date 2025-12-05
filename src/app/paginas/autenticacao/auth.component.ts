import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  isLogin = true;
  loading = false;

  formData = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  };

  toggleMode(): void {
    this.isLogin = !this.isLogin;
    this.formData = {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    };
  }

  onSubmit(): void {
    if (this.isLogin) {
      this.handleLogin();
    } else {
      this.handleSignup();
    }
  }

  handleLogin(): void {
    if (!this.formData.email || !this.formData.password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    this.loading = true;
    
    setTimeout(() => {
      this.authService.login(this.formData.email, this.formData.password);
      
      this.loading = false;
      
      alert('Login realizado com sucesso!');
      
      this.router.navigate(['/logado']);
    }, 1000);
  }

  handleSignup(): void {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Os números do contrato não coincidem');
      return;
    }

    this.loading = true;
    
    setTimeout(() => {
      this.loading = false;
      
      alert('Conta criada com sucesso!');
      
      this.isLogin = true;
    }, 1000);
  }
}
