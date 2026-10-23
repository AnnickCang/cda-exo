import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { LeaveCounter } from '../../leave-counter/leave-counter';
import { MatButton } from '@angular/material/button';
import { Department } from '../../models/department';
//import { MatCardSubtitle } from '../../../../node_modules/@angular/material/types/card';

type Status = 'sur site' | 'en télétravail' | 'absent';

@Component({
  imports: [LeaveCounter, MatButton], //, MatCardSubtitle],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly userName = 'Claire';
  protected message = '';
  protected copie = '';

  protected readonly status = signal<Status>('sur site');

  protected sayHello(): void {
    this.message = 'Bienvenue dans TechCorp Equipe, ' + this.userName + ' !';
  }

  protected clearMessage(): void {
    this.message = '';
  }

  protected copierChamp(value: string): void {
    this.copie = value;
  }

  protected changeStatus(newStatus: Status): void {
    this.status.set(newStatus);
  }

  // La requête part toute seule. Le résultat et l'état du chargement sont des signals.
  protected readonly departments = httpResource<Department[]>(() => '/api/departments');
}
