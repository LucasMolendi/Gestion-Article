import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.html'
})
export class Detail implements OnInit {
  articleId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupère l'ID depuis l'URL
    this.articleId = this.route.snapshot.paramMap.get('id');
  }
}
