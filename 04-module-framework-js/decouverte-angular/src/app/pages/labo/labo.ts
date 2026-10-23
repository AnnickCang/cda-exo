import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

const TIPS = [
  "Lisez toujours le message d'erreur en entier.",
  'Un signal se lit avec des parenthèses.',
  "Vérifiez l'onglet Réseau avant d'accuser le code.",
];

// Une Promise qui se termine (resolve) après ms millisecondes.
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simule un appel serveur lent qui échoue une fois sur trois.
async function fetchTip(): Promise<string> {
  await wait(1500);
  if (Math.random() < 0.33) {
    // Ici throw fait sortir de la fonction (si elle se trouvait dans un bloc try/catch, ferait sortir du bloc try/catch)
    throw new Error('Le serveur ne répond pas.');
  }
  return TIPS[Math.floor(Math.random() * TIPS.length)];
}
@Component({
  imports: [MatButton],
  selector: 'app-labo',
  styleUrl: './labo.css',
  templateUrl: './labo.html',
})
export class Labo {
  protected readonly logs = signal<string[]>([]);
  protected readonly loading = signal(false);
  protected readonly tip = signal('');

  protected runTimeout(): void {
    this.logs.set([]);
    this.log('1. Avant setTimeout');
    setTimeout(() => this.log('3. Dans setTimeout, une seconde plus tard'), 1000);
    this.log('2. Après setTimeout');
  }

  private log(message: string): void {
    this.logs.update((list) => [...list, message]);
  }

  protected async loadTip(): Promise<void> {
    this.loading.set(true);
    this.tip.set('');
    try {
      // await : la méthode se met en pause ici, sans bloquer la page
      // et mettra à joue tip quand la fonction fetchTip aura retourné quelque chose
      // sans le await, la fonction fetchTip renverra une Promise, avec le await, cette fonction renverra le type de donnée de la Promise (entre <>)
      const text = await fetchTip();
      this.tip.set(text);
    } catch (error) {
      // as Error : assertion de type, on force error à être de type Error (les : servent à typer à la création d'une variable)
      this.tip.set('Erreur : ' + (error as Error).message);
    } finally {
      // exécuté dans tous les cas, succès ou erreur
      this.loading.set(false);
    }
  }
}
