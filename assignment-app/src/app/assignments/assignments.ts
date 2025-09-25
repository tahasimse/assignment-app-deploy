import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-assignments',
  imports: [],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments {
  boutonActive: boolean = false;




ngOnInit() {
  console
  setTimeout(() => {
    this.activerBouton();
  }, 3000);
  this.boutonActive = true;
  }

  protected AjouterAssignment(): void {
    // Logic to add an assignment
  } 
}
