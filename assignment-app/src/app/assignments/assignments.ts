import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { RenduDirective } from '../shared/rendu';
import { NonRenduDirective } from '../shared/nonRendu';

@Component({
  selector: 'app-assignments',
  imports: [
    RouterLink,
    MatButtonModule,
    MatDividerModule,
    DatePipe,
    MatListModule,
    RenduDirective,
    NonRenduDirective
  ],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class AssignmentsComponent implements OnInit {
  trackByNom(index: number, assignment: Assignment) {
    return assignment.nom;
  }
  titre = "Mon application sur les assignments";
  
  // Simple Assignment model for this component
  assignments: Assignment[] = [];

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }

  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom);
  }
}
