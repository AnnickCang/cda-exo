import { Component, computed, inject, signal } from '@angular/core';
import { EmployeeCard } from '../../employee-card/employee-card';
import { SearchBox } from '../../search-box/search-box';
import { TeamStore } from '../../team-store';

@Component({
  imports: [EmployeeCard, SearchBox],
  selector: 'app-team-page',
  styleUrl: './team-page.css',
  templateUrl: './team-page.html',
})
export class TeamPage {
  // inject() : Angular fournit l'instance unique du service.
  private readonly store = inject(TeamStore);

  protected readonly nbRemoteColleagues = computed(
    () => this.store.employees().filter((emp) => emp.remote).length,
  );

  protected readonly search = signal('');

  protected readonly filteredEmployees = computed(() => {
    const text = this.search().trim().toLocaleLowerCase();
    // renvoie un tableau filtré - .includes permet de vérifier que text est contenu dans l'objet qui appelle .includes()
    return this.store
      .employees()
      .filter((emp) => (emp.firstName + ' ' + emp.lastName).toLocaleLowerCase().includes(text));
  });

  // Cette fonction va appeler la fonction remove de TeamStore pour supprimer l'employé (ainsi la liste sera à jour grâce au signal)
  protected remove(id: number): void {
    this.store.remove(id);
  }
}
