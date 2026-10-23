import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { Home } from './pages/home/home';
import { TeamPage } from './pages/team-page/team-page';
import { EmployeeDetail } from './employee-detail/employee-detail';
import { Labo } from './pages/labo/labo';

export const routes: Routes = [
  // title : le titre de l'onglet, différent pour chaque page.
  { path: '', title: 'Accueil | TechCorp Equipe', component: Home },
  // :id indique la page à afficher, id devra être déclaré dans le composant qui appelle cette page, cad dans EmployeeDetail
  // on le met avant 'equipe' car ça va du plus spécifique au moins spécifique
  { path: 'equipe/:id', component: EmployeeDetail },
  { path: 'equipe', title: 'Equipe | TechCorp Equipe', component: TeamPage },
  { path: 'ajouter', title: 'Ajouter un collègue | TechCorp Equipe', component: AddEmployee },
  { path: 'labo', title: 'Laboratoire | TechCorp Equipe', component: Labo },
  // Toute autre adresse renvoie vers l'accueil, toujours en dernier
  { path: '**', redirectTo: '' },
];
