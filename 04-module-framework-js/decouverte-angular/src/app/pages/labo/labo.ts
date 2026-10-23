import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { Subscription, interval } from 'rxjs';

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

  protected readonly seconds = signal(0);
  protected readonly running = signal(false);
  private chronoSubscription?: Subscription;
  private readonly destroyRef = inject(DestroyRef);

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

  protected startChrono(): void {
    this.running.set(true);
    // subscribe : on s'abonne, le flux démarre. Il renvoie un "abonnement"
    this.chronoSubscription = interval(1000)
      // .pipe : permet d'ajouter un filtre avant l'abonnement (pour y intégrer d'autres actions)
      // ici takeUntilDestroyed(this.destroyRef) : désbonne quand on quitte la page (via un lien par exemple)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        console.log('tic', value);
        this.seconds.set(value + 1);
      });
  }

  protected stopChrono(): void {
    // unsubscribe : on se désabonne, le flux s'arrête
    // Le ? signifie : si chronoSubscription n'est pas à undefined, alors exécute l'action, sinon ne fait rien
    this.chronoSubscription?.unsubscribe();
    this.running.set(false);
  }
}
