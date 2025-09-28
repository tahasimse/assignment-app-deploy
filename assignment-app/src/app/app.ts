import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('assignment-app');
  opened = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
    this.opened = false;
  }

  navigateToAjoutDevoir() {
    this.router.navigate(['/ajout-devoir']);
    this.opened = false;
  }

  navigateToListeDesDevoirs() {
    this.router.navigate(['/liste-des-devoirs']);
    this.opened = false;
  }
}
