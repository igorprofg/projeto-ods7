import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      console.log('Tentando fazer login...');
      const userCredential = await this.authService.login(this.email, this.password);
      console.log('Login bem-sucedido:', userCredential);
      this.router.navigate(['/home']);
    } catch (error: any) { 
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login: ' + error.message); 
    }
  }
  

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']); 
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }
}
