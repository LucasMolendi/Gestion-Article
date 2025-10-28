import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService, ArticleDef } from '../service/articles-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss']
})
export class ArticleDetail implements OnInit {
  articleId: string | null = null;
  article: ArticleDef | undefined;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');

    this.articlesService.getArticles().subscribe({
      next: (response: any) => {
        console.log('Réponse brute :', response);

        const articles = response.data;

        this.article = articles.find((a: any) => a.id === this.articleId);

        if (!this.article) {
          this.message = 'Article introuvable ';
        } else {
          console.log(' Article sélectionné :', this.article);
        }
      },
      error: (err) => {
        console.error('Erreur chargement articles :', err);
        this.message = 'Erreur de chargement des données';
      }
    });
  }
}
