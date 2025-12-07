import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from './shared/auth.service';
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  titre = "Application de gestion des assignments";
  nomDuProf = 'Michel Buffa';
  opened = false;

  constructor(private router: Router, private authService: AuthService, private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
    this.opened = false;
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

  isLogged() {
    return this.authService.isLogged();
  }

  peuplerBD() {
    this.assignmentsService.peuplerBD()
      .subscribe({
        next: () => {
          console.log("La BD a été peuplée");
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  deleteAll() {
    this.assignmentsService.deleteAll()
      .subscribe({
        next: (message) => {
          console.log(message);
          // On recharge la page pour afficher la liste vide
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
