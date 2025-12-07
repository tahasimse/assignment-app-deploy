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
import { AuthService } from '../shared/auth.service';

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
  page = 1;
  limit = 10;
  totalDocs = 0;
  totalPages = 0;
  hasPrevPage = false;
  prevPage = 1;
  hasNextPage = false;
  nextPage = 1;

  constructor(private assignmentsService: AssignmentsService, private authService: AuthService) {}

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments(this.page, this.limit)
      .subscribe(data => {
        this.assignments = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
      });
  }

  pagePrecedente() {
    this.page = this.prevPage;
    this.getAssignments();
  }

  pageSuivante() {
    this.page = this.nextPage;
    this.getAssignments();
  }

  premierePage() {
    this.page = 1;
    this.getAssignments();
  }

  dernierePage() {
    this.page = this.totalPages;
    this.getAssignments();
  }

  isAdmin() {
    return this.authService.admin;
  }
}
