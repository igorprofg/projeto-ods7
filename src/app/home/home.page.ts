import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isUserLoggedIn = false; 
  actions = [
    { name: "Economize energia", category: "Dicas" },
    { name: "Use luz natural", category: "Sustentabilidade" },
    { name: "Desligue aparelhos", category: "Consumo consciente" }
  ]; // Exemplo de dados de ações

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Observa mudanças no estado de autenticação
    this.authService.isLoggedIn().subscribe((user) => {
      this.isUserLoggedIn = !!user; 
    });
  }
}
