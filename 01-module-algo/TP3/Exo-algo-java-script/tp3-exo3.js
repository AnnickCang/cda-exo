console.log("TP3 - Exercice 3 : Compteur de mots");
console.log();

const prompt = require("prompt-sync")();

let tableauMots = [];
let occurrencesMots = new Map();
let totalMots, totalMotsUniques;
let largeurColonneMot = 0;

let phrase = prompt("Phrase à décortiquer : ");
phrase = phrase.trim();

if (phrase !== "") {
  // 'split(" ") : ne tiendra compte que d'un seul caractère espace comme séparateur de mot
  // 'split(/\s+/)' : le séparateur de mot est un ou plusieurs espaces
  // la 2ème solution est plus adaptée pour ne recueillir que les mots mêmes s'ils sont séparés par plusieurs espaces
  tableauMots = phrase.toLowerCase().split(/\s+/);
  totalMots = tableauMots.length;

  for (let mot of tableauMots) {
    let compteur = 0;
    if (occurrencesMots.has(mot)) {
      compteur = occurrencesMots.get(mot);
    }
    occurrencesMots.set(mot, compteur + 1);
    if (mot.length > largeurColonneMot) {
      largeurColonneMot = mot.length;
    }
  }
  totalMotsUniques = occurrencesMots.size;
  largeurColonneMot += 1;

  console.log();
  while (occurrencesMots.size > 0) {
    let cle;
    let quantiteMax = 0;
    for (let [mot, quantite] of occurrencesMots) {
      if (quantite > quantiteMax) {
        quantiteMax = quantite;
        cle = mot;
      }
    }
    console.log(`${cle.padEnd(largeurColonneMot, " ")} : ${quantiteMax}`);
    occurrencesMots.delete(cle);
  }

  console.log();
  console.log(`Total : ${totalMots} mots, ${totalMotsUniques} mots uniques`);
}
