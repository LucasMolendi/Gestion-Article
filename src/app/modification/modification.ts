import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService, ArticleDef } from '../service/articles-service';

@Component({
  selector: 'app-modification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modification.html',
  styleUrls: ['./modification.scss']
})
export class Modification implements OnInit {
  articleId: string | null = null;
  public articles: ArticleDef = new ArticleDef();
  public message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
  }

  sendFormData() {
    if (this.articleId) {
      this.articles.id = this.articleId;
    }

    this.articlesService.saveArticle(this.articles).subscribe({
      next: () => {
        this.router.navigate(['/articles']), 2000;
      },
      error: (err) => {
        console.error('Erreur:', err);

      }
    });
  }
}
