import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'assignment-detail',
  imports: [DatePipe, MatCardModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css'
})
export class AssignmentDetail implements OnInit {

  @Input() 
  assignmentTransmis?: Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor() { }
  
  ngOnInit(): void {
  }

  onAssignmentRendu(): void {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
    }
  }

  onDelete(): void {
    if (this.assignmentTransmis) {
      this.deleteAssignment.emit(this.assignmentTransmis);
    }
  }

}
