import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {ArticlesService} from '../service/articles-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.html',
  imports: [
    HttpClientModule,
  ]
})
export class ArticleDetail implements OnInit {
  articleId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private articlesServices: ArticlesService
  ) { }

  ngOnInit(): void {
    // Récupère l'ID depuis l'URL
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.articlesServices.getArticles()

  }
}
