import {Component} from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesService} from '../service/articles-service';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-article',
  imports: [
    NgStyle,
    HttpClientModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Articles {
  public articles: any[] = [];

  constructor(private articlesServices: ArticlesService) {

  }

  onClickCallApi() {
    this.articlesServices.getArticles().subscribe({
      next: data => {
        //Si le code métier json de l'api est valide
        if (data.code == "200") {
          //mettre a jour dans article
          //pk data.data car :
          //- data tout le json
          //- dans ce json nous avons (code, msg, data : la liste des articles)
          this.articles = data.data;
        }
      }
    });
  }
}
