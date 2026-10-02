console.log("TP3 - Exercice 3 : Compteur de mots");
console.log();

const prompt = require("prompt-sync")();

let tableauMots = [];

let phrase = prompt("Phrase à décortiquer : ");

function decoupeEnMots(chaine) {
  // Utiliser une expression régulière avec split
  return chaine.split(/\s+/);
}

tableauMots = decoupeEnMots(phrase);

/*
1. Recoit une phrase
2. Decoupe en mots (insensible a la casse)
3. Compte les occurrences de chaque mot avec une Map
4. Affiche les mots tries par frequence decroissante
*/
