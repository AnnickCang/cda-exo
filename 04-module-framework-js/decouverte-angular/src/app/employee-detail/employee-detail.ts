import { Component, input, inject } from '@angular/core';
import { TeamStore } from '../team-store';
import { Employee } from '../models/employee';

@Component({
  imports: [],
  selector: 'app-employee-detail',
  styleUrl: './employee-detail.css',
  templateUrl: './employee-detail.html',
})
export class EmployeeDetail {
  private readonly store = inject(TeamStore);
  readonly id = input.required<string>();
  // Number() convertit la chaîne en nombre
  readonly emp = this.store.findById(Number(this.id));
}
