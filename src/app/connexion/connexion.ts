import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ArticlesService} from '../service/articles-service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './connexion.html',
  styleUrl: './connexion.scss'
})
export class Connexion {

  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private articleService: ArticlesService) {}


  onLogin() {
    this.articleService.SendId(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response.code === "200") {
          this.message = "Connexion réussie";
          window.location.href = 'http://localhost:4200/articles';
        } else {
          this.message = "Échec de la connexion : " + response.message;
        }
      },
      error: (err) => {
        this.message = "Erreur réseau ou serveur";
        console.error('Erreur:', err);
      }
    });
  }
}
