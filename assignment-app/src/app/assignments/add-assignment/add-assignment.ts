import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-assignment.html',
  styleUrl: './add-assignment.css'
})
export class AddAssignmentComponent {
  // Form model
  nomAssignment: string = "";
  dateDeRendu: Date | null = null;

  constructor(private assignmentsService: AssignmentsService, private router: Router) {}

  onAjouterAssignment(event: Event): void {
    event.preventDefault();
    const nom = this.nomAssignment?.trim();
    if (!nom || !this.dateDeRendu) return;

    // Create a new assignment
    const nouveauAssignment: Assignment = new Assignment();
    nouveauAssignment.nom = nom;
    nouveauAssignment.dateDeRendu = this.dateDeRendu;
    nouveauAssignment.rendu = false;

    // Use service to add assignment
    this.assignmentsService.addAssignment(nouveauAssignment)
      .subscribe(message => {
        console.log(message);
        // Navigate back to home
        this.router.navigate(['/home']);
      });
  }
}
