import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface EmpresaLogin {
  cnpj: string;
  numeroContrato: string;
  nomeEmpresa?: string;
  saldoBlocos?: number;
  quantidadePedidos?: number;
  numeroNotasFiscais?: string[];
  quantidadeEntregas?: number;
  notasDevolvidas?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private empresaLogadaSubject = new BehaviorSubject<EmpresaLogin | null>(null);
  public empresaLogada$ = this.empresaLogadaSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(cnpj: string, numeroContrato: string): void {
    const empresaMock: EmpresaLogin = {
      cnpj: cnpj,
      numeroContrato: numeroContrato,
      nomeEmpresa: 'Empresa ' + cnpj.substring(0, 5),
      saldoBlocos: Math.floor(Math.random() * 5000) + 1000,
      quantidadePedidos: Math.floor(Math.random() * 50) + 5,
      numeroNotasFiscais: [
        String(Math.floor(Math.random() * 1000000)),
        String(Math.floor(Math.random() * 1000000)),
        String(Math.floor(Math.random() * 1000000))
      ],
      quantidadeEntregas: Math.floor(Math.random() * 30) + 10,
      notasDevolvidas: Math.floor(Math.random() * 5)
    };

    this.empresaLogadaSubject.next(empresaMock);
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('empresaLogada', JSON.stringify(empresaMock));
  }

  logout(): void {
    this.empresaLogadaSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('empresaLogada');
  }

  getEmpresaLogada(): EmpresaLogin | null {
    return this.empresaLogadaSubject.value;}

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}

