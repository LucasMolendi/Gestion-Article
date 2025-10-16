import {RouterModule, Routes} from '@angular/router';
import {Inscription} from './inscription/inscription';
import {Articles} from './article/article';
import {NgModule} from '@angular/core';
import {ArticleDetail} from './detail/detail';

export const routes: Routes = [
  { path: 'inscription', component: Inscription },
  { path: 'articles', component: Articles},
  {path : 'article/:id', component : ArticleDetail}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
