import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      id: 1,
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date('2022-10-10'),
      rendu: false
    },
    {
      id: 2,
      nom: "Devoir JAVA à rendre",
      dateDeRendu: new Date('2022-09-10'),
      rendu: true
    },
    {
      id: 3,
      nom: "Devoir Gestion de projet à rendre",
      dateDeRendu: new Date('2022-11-17'),
      rendu: true
    }
  ];

  constructor() {
    console.log("Service Assignments créé !");
  }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  getAssignment(id: number): Observable<Assignment | undefined> {
    const a: Assignment | undefined = this.assignments.find(a => a.id === id);
    return of(a);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    // Génération d'ID automatique (simule une BD avec auto-incrément)
    // On regarde l'ID le plus grand existant et on ajoute 1
    const newId = this.assignments.length > 0 ? Math.max(...this.assignments.map(a => a.id)) + 1 : 1;
    assignment.id = newId;
    
    this.assignments.push(assignment);
    // TODO: Connecter à la base de données (POST)
    return of('Assignment ajouté');
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    // Pour le moment, rien besoin de faire car passage par référence
    // Plus tard, requête HTTP PUT
    return of('Assignment service: assignment modifié !');
  }

  deleteAssignment(assignment: Assignment): Observable<string> {
    const pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of('Assignment supprimé');
  }
}
