console.log("TP1 - Exercice 6 : Convertisseur de temps");
console.log("");

const prompt = require("prompt-sync")();
let nbSecondesDepart, nbSecondesRestant;
let nbSecondes, nbMinutes, nbHeures;

nbSecondesDepart = Number(prompt("Entrez le nombre de secondes : "));

nbHeures = Math.trunc(nbSecondesDepart / 3600);
nbSecondesRestant = nbSecondesDepart % 3600;
nbMinutes = Math.trunc(nbSecondesRestant / 60);
nbSecondes = nbSecondesRestant % 60;

console.log(`Cela fait : ${nbHeures}H ${nbMinutes}min ${nbSecondes}sec`);
