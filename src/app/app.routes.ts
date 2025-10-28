import {RouterModule, Routes} from '@angular/router';
import {Inscription} from './inscription/inscription';
import {Articles} from './article/article';
import {NgModule} from '@angular/core';
import {ArticleDetail} from './detail/detail';
import {Connexion} from './connexion/connexion';
import {Modification} from './modification/modification';
import {MdpOublieModule} from './mdp-oublie/mdp-oublie';
import {AjoutArticle} from './ajout-article/ajout-article';

export const routes: Routes = [
  { path: 'inscription', component: Inscription },
  { path: 'articles', component: Articles},
  {path : 'article/:id', component : ArticleDetail},
  {path : 'connexion', component: Connexion},
  {path : 'modification/:id', component: Modification},
  {path : 'MdpOublie', component: MdpOublieModule},
  {path: 'Ajout', component: AjoutArticle}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
