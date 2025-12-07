import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    MatPaginatorModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
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
  
  //pour gérer la pagination
  page:number = 1;
  limit:number = 10;
  totalDocs!:number;
  totalPages!:number;
  nextPage!:number;
  prevPage!:number;
  hasPrevPage!:boolean;
  hasNextPage!:boolean;

  constructor(private assignmentsService: AssignmentsService, private authService: AuthService) {}

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignmentsPagine(this.page, this.limit)
    .subscribe(
      data => {
        this.assignments = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.nextPage = data.nextPage;
        this.prevPage = data.prevPage;
        this.hasPrevPage = data.hasPrevPage;
        this.hasNextPage = data.hasNextPage;
        console.log("Données reçues");
      }
    );
  }

  handlePage(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.getAssignments();
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
