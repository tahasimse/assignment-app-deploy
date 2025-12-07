import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'assignment-detail',
  imports: [DatePipe, MatCardModule, MatCheckboxModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css'
})
export class AssignmentDetail implements OnInit {
  assignmentTransmis?: Assignment;

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }
  
  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(a => this.assignmentTransmis = a);
  }

  onAssignmentRendu(): void {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
      this.assignmentsService.updateAssignment(this.assignmentTransmis)
        .subscribe(message => {
          this.router.navigate(['/home']);
        });
    }
  }

  onDeleteAssignment(): void {
    if (!this.assignmentTransmis) return;

    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe(message => {
        this.assignmentTransmis = undefined;
        this.router.navigate(['/home']);
      });
  }

  onClickEdit() {
    if(!this.assignmentTransmis) return;
    this.router.navigate(['/assignment', this.assignmentTransmis.id, 'edit'],
      {queryParams: {nom: this.assignmentTransmis.nom}, fragment: 'edition'});
  }

  isAdmin() {
    return this.authService.isLogged() && this.authService.admin;
  }

  isLogged() {
    return this.authService.isLogged();
  }
}
