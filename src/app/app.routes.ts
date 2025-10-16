import {RouterModule, Routes} from '@angular/router';
import {Inscription} from './inscription/inscription';
import {Articles} from './article/article';
import {Detail} from './detail/detail';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'inscription', component: Inscription },
  { path: 'articles', component: Articles},
  { path: 'details',component: Detail}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
