import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Caminho do serviço de autenticação
import { AlertController } from '@ionic/angular'; // Para mostrar alertas de erro/sucesso

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.router.navigate(['/home']); // Redireciona para a página inicial após o registro
    } catch (error) {
      console.error('Erro ao registrar:', error);
      const alert = await this.alertController.create({
        header: 'Erro de Registro',
        message: 'Ocorreu um erro ao tentar registrar. Verifique as informações inseridas.',
        buttons: ['OK'],
      });
      await alert.present(); // Mostra o alerta para o usuário
    }
  }
}
