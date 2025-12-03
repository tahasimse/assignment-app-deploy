import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
    providedIn: 'root'
})
export class AssignmentsService {
    assignments: Assignment[] = [
        {
            nom: 'TP Angular',
            dateDeRendu: new Date('2023-10-01'),
            rendu: false
        }
    ];

    addAssignment(assignment: Assignment) {
        this.assignments.push(assignment);
    }

    getAssignments() {
        return this.assignments;
    }
}