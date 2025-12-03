import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AssignmentsComponent } from './assignments/assignments';
import { ListeDesDevoirs } from './pages/liste-des-devoirs/liste-des-devoirs';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ajout-devoir', component: AssignmentsComponent },
  { path: 'liste-des-devoirs', component: ListeDesDevoirs },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }