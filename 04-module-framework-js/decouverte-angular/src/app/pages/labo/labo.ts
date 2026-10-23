import { DatePipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { Subscription, filter, interval, map, of, single, take } from 'rxjs';

const TIPS = [
  "Lisez toujours le message d'erreur en entier.",
  'Un signal se lit avec des parenthèses.',
  "Vérifiez l'onglet Réseau avant d'accuser le code.",
];

// Une Promise qui se termine (resolve) après ms millisecondes.
// ATTENTION : une fonction qui renvoie une Promise doit toujours être appelée avec await devant, sinon on la "bypass"
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
  imports: [DatePipe, MatButton],
  selector: 'app-labo',
  styleUrl: './labo.css',
  templateUrl: './labo.html',
})
export class Labo {
  // L'ordre d'exécution (avec un setTimeout)
  protected readonly logs = signal<string[]>([]);

  // Une Promise et async/await
  protected readonly loading = signal(false);
  protected readonly tip = signal('');

  // Un Observable et son abonnement
  protected readonly seconds = signal(0);
  protected readonly running = signal(false);
  private chronoSubscription?: Subscription;
  private readonly destroyRef = inject(DestroyRef);

  // Un Observable transformé en signal (plus besoin de faire le subscribe et le unsubscribe)
  protected readonly now = toSignal(interval(1000).pipe(map(() => new Date())), {
    initialValue: new Date(), // attribution d'une valeur avant la première émission, sinon vaudrait undefiend pendant une seconde
  });

  protected readonly countdown = signal(0);
  protected readonly countdownRunning = signal(false);
  protected readonly countdownEndMessage = signal('');

  protected debutDuree: number = 0;
  protected finDuree: number = 0;
  protected readonly duree = signal(0);
  protected readonly perfRunning = signal(false);

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

  protected runOperators(): void {
    this.logs.set([]);
    of(1, 2, 3, 4, 5, 6)
      .pipe(
        filter((n) => n % 2 === 0),
        map((n) => n * 10), // le map s'applique sur les résultats du filter précédent
      )
      .subscribe({
        next: (n) => this.log('Valeur reçue : ' + n),
        complete: () => this.log('Terminé'),
      });
  }

  protected startPauseIn(): void {
    this.countdownEndMessage.set('');
    this.countdownRunning.set(true);
    this.chronoSubscription = interval(1000)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        // take(10) : pour 10 valeurs, de 0 à 9
        take(10),
        // pour la map, n démarre à 0
        map((n) => 9 - n),
      )
      .subscribe({
        next: (n) => this.countdown.set(n),
        complete: () => {
          this.countdownEndMessage.set("C'est l'heure de la pause !");
          this.countdownRunning.set(false);
        },
      });
  }

  // Mesure de performances
  // ATTENTION : une fonction qui utilise await doit toujours être déclarée async
  protected async perf2wait(): Promise<void> {
    this.perfRunning.set(true);
    this.debutDuree = performance.now();
    // On attend la fin de chaque wait() => 2s
    await wait(1000);
    await wait(1000);
    this.finDuree = performance.now();
    this.duree.set(Math.round(this.finDuree - this.debutDuree) / 1000);
    this.perfRunning.set(false);
  }
  protected async perfWaitPromise(): Promise<void> {
    this.perfRunning.set(true);
    this.debutDuree = performance.now();
    // On lance la Promise et on poursuit, on récupèrera sa valeur quand ce sera fini => 1s (attente moins longue)
    await Promise.all([wait(1000), wait(1000)]);
    this.finDuree = performance.now();
    this.duree.set(Math.round(this.finDuree - this.debutDuree) / 1000);
    this.perfRunning.set(false);
  }

  // Utilisation d'un Observable
  // Défi Avancé 2 de la phase 1 (à revoir)
}
