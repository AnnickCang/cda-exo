console.log("TP2 - Exercice 7 : Conversion chiffres romains -> décimaux");
console.log();

// I=1, V=5, X=10, L=50, C=100, D=500, M=1000
// Partir de l'unité et remonter
// Si l'élément à gauche est inférieur ou égal à l'élément de droite : soustraire l'élément de gauche à l'élément de droite
// Dans le cas contraire : les additionner

const prompt = require("prompt-sync")();
let equivalentDecimal = 0;
let chiffrePrecedent;
let chiffresRomains = prompt("Chiffres romains : ");

function traduireChiffreRomainEnDecimal(chiffreRomain) {
  switch (chiffreRomain.toUpperCase()) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

// On récupère les chiffres les uns après les autres en partant de l'unité (la dernière lettre) et on remonte
for (let i = chiffresRomains.length - 1; i >= 0; i--) {
  let nombreCourant = traduireChiffreRomainEnDecimal(chiffresRomains[i]);
  if (i === chiffresRomains.length - 1) {
    equivalentDecimal += nombreCourant;
    chiffrePrecedent = nombreCourant;
  } else {
    if (nombreCourant < chiffrePrecedent) {
      equivalentDecimal -= nombreCourant;
    } else {
      equivalentDecimal += nombreCourant;
    }
    chiffrePrecedent = nombreCourant;
  }
}

console.log(equivalentDecimal);
