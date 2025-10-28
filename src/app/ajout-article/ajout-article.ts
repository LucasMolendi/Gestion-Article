import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticlesService, ArticleDef } from '../service/articles-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajout-article.html',
  styleUrls: ['./ajout-article.scss']
})
export class AjoutArticle {
  public articles: ArticleDef = new ArticleDef();
  public message: string = '';

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  public sendFormData(): void {
    this.articlesService.saveArticle(this.articles).subscribe({
      next: (response) => {
        console.log('📤 Articles créés :', response);

        this.router.navigate(['/articles']), 2000;
      },
      error: (err) => {
        console.error('Erreur création articles :', err);
      }
    });
  }
}
