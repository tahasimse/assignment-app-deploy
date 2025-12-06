import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
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

  constructor(private loggingService: LoggingService) {
    console.log("Service Assignments créé !");
  }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");
    return of('Assignment ajouté');
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    // Pour le moment, rien besoin de faire car passage par référence
    // Plus tard, requête HTTP PUT
    this.loggingService.log(assignment.nom, "modifié");
    return of('Assignment service: assignment modifié !');
  }

  deleteAssignment(assignment: Assignment): Observable<string> {
    const pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    this.loggingService.log(assignment.nom, "supprimé");
    return of('Assignment supprimé');
  }
}
