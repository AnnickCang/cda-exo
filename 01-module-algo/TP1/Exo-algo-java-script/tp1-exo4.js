console.log("TP1 - Exercice 4 : Calcul d'IMC avec interprétation");
console.log("");

const prompt = require("prompt-sync")();
let poids, taille, valeurIMC;
const imcInsuffisant = 18.5,
  imcNormal = 24.9,
  imcSurpoids = 29.9;

poids = Number(prompt("Poids : "));
taille = Number(prompt("Taille : "));
valeurIMC = poids / taille ** 2;
console.log(`Votre IMC est : ${valeurIMC.toFixed(1)}`);

if (valeurIMC < imcInsuffisant) {
  console.log("Vous êtes en insuffisance pondérale");
} else if (valeurIMC < imcNormal) {
  console.log("Vous êtes dans la normale");
} else if (valeurIMC < imcSurpoids) {
  console.log("Vous êtes en surpoids");
} else {
  console.log("Vous êtes obèse");
}
