import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ArticleDef {
  id?: string;
  title: string = '';
  desc: string = '';
  author: string = '';
  imgPath: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/articles");
  }

  DeleteArticle(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }

  SendId(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/login', { email, password });
  }

  RegisterUser(user: any): Observable<any> {
    return this.http.post(`http://localhost:3000/signup`, user);
  }

  saveArticle(article: ArticleDef): Observable<any> {
    return this.http.post('http://localhost:3000/articles/save', article);
  }
}
