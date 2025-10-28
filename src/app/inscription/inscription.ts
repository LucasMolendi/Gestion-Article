import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from '../service/articles-service';
import { CommonModule } from '@angular/common';

export class User {
  public email: string = '';
  public password: string = '';
  public passwordConfirm: string = '';
  public pseudo: string = '';
  public city: string = '';
  public cityCode: string = '';
  public phone: string = '';
}

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.scss']
})
export class Inscription {
  public user: User = new User();
  public message: string = '';
  public passwordMismatch: boolean = false;

  constructor(private articleService: ArticlesService) {}

  sendFormData() {
    const pwd = (this.user.password || '').trim();
    const pwdConfirm = (this.user.passwordConfirm || '').trim();

    // Vérification des mots de passe
    if (pwd !== pwdConfirm) {
      this.passwordMismatch = true;
      this.message = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.passwordMismatch = false;

    // Appel API d'inscription
    this.articleService.RegisterUser(this.user).subscribe({
      next: (response: any) => {
        if (response.code === '200') {
          this.message = 'Inscription réussie 🎉';
          window.location.href = 'http://localhost:4200/connexion';
        } else {
          this.message = 'Erreur : ' + (response.message || 'inscription échouée');
        }
      },
      error: (err) => {
        this.message = 'Erreur réseau ou serveur';
        console.error('Erreur:', err);
      }
    });
  }
}
