import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/articles");
  }
  DeleteArticle(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }
  SendId(email: string, password: string){
    return this.http.post('http://localhost:3000/login', {email, password});
  }
}
