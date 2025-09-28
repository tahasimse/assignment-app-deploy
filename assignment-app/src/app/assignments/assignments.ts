import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.css'
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les assignments";
  nomAssignment = "";
  // Pour la démo du binding bi-directionnel
  nomDevoir: string = "";
  // Bound to the <input type="date"> which yields a string like '2025-09-25'
  dateDeRendu: string | null = null;
  // ajoutActive = false => bouton désactivé (binding [disabled]="!ajoutActive")
  ajoutActive: boolean = false;
  
  // Simple Assignment model for this component
  assignments: Assignment[] = [
    {
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date('2022-10-10'),
      rendu: false
    },
    {
      nom: "Devoir JAVA à rendre",
      dateDeRendu: new Date('2022-09-10'),
      rendu: true
    }
  ];

  ngOnInit() {
    // Au bout de 2 secondes on active le bouton
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu ? new Date(this.dateDeRendu) : new Date();
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
  }

  protected AjouterAssignment(): void {
    const nom = this.nomAssignment?.trim();
    if (!nom) return;

    // Parse the date string (YYYY-MM-DD) to a Date if provided
    const date = this.dateDeRendu ? new Date(this.dateDeRendu) : new Date();

    // Push to the list (not rendered yet in template; next step)
    this.assignments.push({ nom, dateDeRendu: date, rendu: false });

    console.log('Assignment ajouté:', nom);
    console.log('Date de rendu:', date.toISOString());

    // Reset form fields
    this.nomAssignment = "";
    this.dateDeRendu = null;
  }

  protected onAjouterAssignment(event: Event): void {
    event.preventDefault();
    this.AjouterAssignment();
  }

  // (getColor removed: plus utilisé dans le template après passage aux directives appRendu/appNonRendu)
}
