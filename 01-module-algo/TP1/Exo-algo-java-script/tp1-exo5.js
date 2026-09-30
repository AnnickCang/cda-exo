console.log("TP1 - Exercice 5 : Devis peinture");
console.log("");

let prompt = require("prompt-sync")();
let longueur, largeur, hauteur;
let surfaceBrute, surfaceNette, nbPotsPeinture, prixTotal, moduloPots;
const prixPotPeinture = 29.9,
  surfaceCouverte = 10,
  pourcentagePortesFenetres = 0.2;

longueur = Number(prompt("Longueur : "));
largeur = Number(prompt("Largeur : "));
hauteur = Number(prompt("Hauteur : "));

surfaceBrute = (longueur * 2 + largeur * 2) * hauteur;
surfaceNette = surfaceBrute * (1 - pourcentagePortesFenetres);

// Math.ceil pour arrondir à l'entier supérieur
nbPotsPeinture = Math.ceil(surfaceNette / surfaceCouverte);

prixTotal = nbPotsPeinture * prixPotPeinture;

console.log();
console.log(`Surface nette : ${surfaceNette.toFixed(2)}`);
console.log(`Nombre de pots de peinture : ${nbPotsPeinture}`);
console.log(`Prix total : ${prixTotal} €`);
