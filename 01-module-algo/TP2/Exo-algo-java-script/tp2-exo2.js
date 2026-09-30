console.log("TP2 - Exercice 2 : Jeu 'Plus grand / Plus petit'");
console.log();

const prompt = require("prompt-sync")();
let nombreMystere, nombre;
let gagne = false,
  nombreEssais = 0;

/* 
Choix d'un nombre aléatoire entre 1 et 100 :
  - Math.random() : donne un nombre décimal aléatoire entre 0 et 1 exclus (0 <= x < 1)
  - Math.random() * 100 : pour obtenir un nombre décimal entre 0 et 100 exclus (0 <= x < 100)
  - Math.floor(Math.random() * 100) : pour récupérer la partie entière uniquement (0 <= x < 100)
  - Math.floor(Math.random() * 100) + 1 : pour que l'intervalle soit comprise entre 1 et 100 inclus (1 <= x <= 100)
*/
nombreMystere = Math.floor(Math.random() * 100) + 1;

console.log("Jeu : plus grand - plus petit");
console.log("Devinez un nombre entre 1 et 100 en un minimum d'essais");

do {
  nombreEssais++;
  nombre = Math.floor(Number(prompt("Nombre : ")));

  if (nombre < 1 || nombre > 100) {
    console.log("Le nombre doit être compris entre 1 et 100 inclus");
    nombreEssais--;
  } else if (nombre === nombreMystere) {
    gagne = true;
    console.log(`Bravo ! Trouvé en ${nombreEssais} essais`);
  } else if (nombre < nombreMystere) {
    console.log("Plus grand !");
  } else {
    console.log("Plus petit !");
  }
} while (!gagne);
