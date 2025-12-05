import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService, EmpresaLogin } from '../../services/auth.service';

@Component({
  selector: 'app-logado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  empresa: EmpresaLogin | null = null;
  menuOpen = false;
  today = new Date();

  ngOnInit(): void {
    this.empresa = this.authService.getEmpresaLogada();
    if (!this.empresa) {
      this.router.navigate(['/auth']);
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
