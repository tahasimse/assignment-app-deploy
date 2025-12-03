import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';

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
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  // Form model
  nomAssignment: string = "";
  dateDeRendu: Date | null = null;

  onAjouterAssignment(event: Event): void {
    event.preventDefault();
    const nom = this.nomAssignment?.trim();
    if (!nom || !this.dateDeRendu) return;

    // Create a new assignment (later will emit to parent)
    const nouveauAssignment: Assignment = new Assignment();
    nouveauAssignment.nom = nom;
    nouveauAssignment.dateDeRendu = this.dateDeRendu;
    nouveauAssignment.rendu = false;

    // Emit to parent
    this.nouvelAssignment.emit(nouveauAssignment);

    // Reset form fields
    this.nomAssignment = "";
    this.dateDeRendu = null;
  }
}
