import { Component, input, computed } from '@angular/core';
import { Employee } from '../models/employee';
import { StatusBadge } from '../status-badge/status-badge';

@Component({
  imports: [StatusBadge],
  selector: 'app-employee-card',
  styleUrl: './employee-card.css',
  templateUrl: './employee-card.html',
})
export class EmployeeCard {
  // Donnée reçue du parent : <app-employee-card [employee]="..." />
  // required : le parent est OBLIGÉ de la fournir.
  readonly employee = input.required<Employee>();
  readonly compact = input(false); // true : affichage seulement du nom et du poste de l'employé
  readonly initials = computed(() => this.employee().firstName[0] + this.employee().lastName[0]);
  readonly noPlace = input(-1);
  readonly totalCollegues = input(-1);
}
