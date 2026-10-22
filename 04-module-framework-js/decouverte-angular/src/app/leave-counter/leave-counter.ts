import { Component, signal, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-leave-counter',
  styleUrl: './leave-counter.css',
  templateUrl: './leave-counter.html',
})
export class LeaveCounter {
  protected readonly totalDays = 25;
  protected readonly daysTaken = signal(0); // En lui passant 0, signal sait qu'il s'agit dun number
  protected readonly remainingDays = computed(() => {
    return this.totalDays - this.daysTaken();
  });
  // 2 écritures possibles : avec ou sans le return (ATTENTION à l'absence de {} et ; quand il n'y a pas le return)
  //protected readonly isEmpty = computed(() => this.remainingDays() === 0);
  protected readonly isEmpty = computed(() => {
    return this.remainingDays() === 0;
  });
  protected readonly usedPercent = computed(() =>
    Math.round((this.daysTaken() * 100) / this.totalDays),
  );
  protected readonly history = signal<string[]>([]);

  // days : ancienne valeur contenue dans daysTaken (point de départ)
  // avec les trois fonctions ci-dessous, on met à jour la valeur de daysTaken
  protected addDay(): void {
    this.daysTaken.update((days) => days + 1);
    this.updateHistory('+1 jour');
  }

  protected removeDay(): void {
    this.daysTaken.update((days) => days - 1);
    this.updateHistory('-1 jour');
  }

  protected rest(): void {
    this.daysTaken.set(0);
    this.updateHistory('Remise à zéro');
  }

  protected addWeek(): void {
    if (this.daysTaken() + 5 <= 25) {
      this.daysTaken.update((days) => days + 7);
    } else {
      this.daysTaken.set(25);
    }
    this.updateHistory('+1 semaine');
  }

  protected updateHistory(action: string): void {
    this.history.update((items) => [...items, action]);
  }
}
