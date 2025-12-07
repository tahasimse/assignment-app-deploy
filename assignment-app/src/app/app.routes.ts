import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment';
import { AssignmentDetail } from './assignments/assignment-detail/assignment-detail';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth-guard';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AssignmentsComponent },
  { path: 'add', component: AddAssignmentComponent, canActivate: [authGuard] },
  { path: 'assignment/:id', component: AssignmentDetail },
  { path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];
