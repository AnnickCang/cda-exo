import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

// Un type qui n'accepte que ces trois textes : une faute de frappe sera refusée.
//type Status = 'sur site' | 'en télétravail' | 'absent';
@Component({
  imports: [RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly appName = 'TechCorp Equipe';
}
