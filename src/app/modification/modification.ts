import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';


export class Articles {
  title : string = ""
  description : string = ""
  author : string = ""
  image : string = ""
}
@Component({
  selector: 'app-modification',
  imports: [
    FormsModule
  ],

  templateUrl: './modification.html',
  styleUrl: './modification.scss'
})
export class Modification implements OnInit{
  articleId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupère l'ID depuis l'URL
    this.articleId = this.route.snapshot.paramMap.get('id');
  }
  public articles = new Articles();
}

