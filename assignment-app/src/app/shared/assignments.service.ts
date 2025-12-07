import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, forkJoin, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { bdInitialAssignments } from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  backendURL = 'http://localhost:8010/api/assignments';

  constructor(private loggingService: LoggingService, private http: HttpClient) { }

  getAssignments(page:number, limit:number): Observable<any> {
    return this.http.get<any>(this.backendURL + "?page=" + page + "&limit=" + limit);
  }

  getAssignmentsPagine(page:number, limit:number): Observable<any> {
    return this.http.get<any>(this.backendURL + "?page=" + page + "&limit=" + limit);
  }

  getAssignment(id: number): Observable<any> {
    return this.http.get<any>(this.backendURL + "/" + id);
  }

  addAssignment(assignment: Assignment): Observable<any> {
    // Génération d'ID automatique s'il n'est pas défini
    if (!assignment.id) {
      assignment.id = Math.floor(Math.random() * 100000);
    }
    return this.http.post<Assignment>(this.backendURL, assignment);
  }

  updateAssignment(assignment: Assignment): Observable<any> {
    return this.http.put<Assignment>(this.backendURL, assignment);
  }

  deleteAssignment(assignment: Assignment): Observable<any> {
    return this.http.delete(this.backendURL + '/' + assignment._id);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.backendURL);
  }

  peuplerBD(): Observable<any> {
    const appelsVersAddAssignment: Observable<any>[] = [];

    bdInitialAssignments.forEach(a => {
      let nouvelAssignment = new Assignment();
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.id = a.id;
      
      // Conversion de la date format dd/mm/yyyy vers Date object
      const dateParts = a.dateDeRendu.split('/');
      nouvelAssignment.dateDeRendu = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
      
      nouvelAssignment.rendu = a.rendu;

      appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment));
    });

    return forkJoin(appelsVersAddAssignment);
  }
}
