import { Service, signal } from '@angular/core';
import { Employee } from './models/employee';

// @Service() : Angular crée une seule instance, partagée par toute l'application.
@Service()
export class TeamStore {
  // private : seul le service peut modifier la liste.
  // protected readonly employees: Employee[] = [...];
  // quand il s'agissait d'un simple tableau, mais la ligne ci-dessous change de syntaxe car on définit ce tableau comme un signal
  private readonly employeesSignal = signal<Employee[]>([
    {
      id: 1,
      firstName: 'Claire',
      lastName: 'Martin',
      email: 'claire.martin@techcorp.fr',
      job: 'Développeuse frontend',
      department: 'Informatique',
      remote: true,
    },
    {
      id: 2,
      firstName: 'Julien',
      lastName: 'Bernard',
      email: 'julien.bernard@techcorp.fr',
      job: 'Chef de projet',
      department: 'Informatique',
      remote: false,
    },
    {
      id: 3,
      firstName: 'Sarah',
      lastName: 'Lefèvre',
      email: 'sarah.lefevre@techcorp.fr',
      job: 'Chargée RH',
      department: 'Ressources humaines',
      remote: false,
    },
  ]);

  // Version en lecture seule pour les composants
  readonly employees = this.employeesSignal.asReadonly();

  // Prochain identifiant libre : 3 collègues au départ
  private nextId = 4;

  // Omit<Employee, 'id'> : un Employee sans id, c'est le service qui le choisit.
  add(employee: Omit<Employee, 'id'>): void {
    // On fait un spread sur employee et on lui ajoute un id, puis on incrémente nextId
    const newEmployee: Employee = { ...employee, id: this.nextId++ };
    // On rajoute ce nouvel employé à la liste des employés
    this.employeesSignal.update((list) => [...list, newEmployee]);
  }

  remove(id: number): void {
    // Mise à jour de la liste des employés en la remplaçant par une nouvelle liste filtrée (toute la liste sauf l'employé avec l'id passé en paramètre)
    this.employeesSignal.update((list) => list.filter((emp) => emp.id !== id));
  }

  findById(id: number): Employee | undefined {
    const emp = this.employeesSignal().find((empRecherche) => empRecherche.id === id);
    return emp;
  }
}
