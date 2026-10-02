console.log("TP2 - Exercice 6 : Dessin de motifs en étoiles");
console.log();

const prompt = require("prompt-sync")();
const motif = "*";
let nbEtoiles;
let nbLignes = Number(prompt("Nombre de lignes : "));

console.log("Partie A : Triangle rectangle");
console.log();
for (let i = 1; i < nbLignes + 1; i++) {
  console.log(motif.repeat(i));
}
console.log();

console.log("Partie B : Triangle inversé");
console.log();
for (let i = nbLignes; i > 0; i--) {
  console.log(motif.repeat(i));
}
console.log();

console.log("Partie C : Pyramide centrée");
console.log();
nbEtoiles = 1;
for (let i = 1; i < nbLignes + 1; i++) {
  console.log(" ".repeat(nbLignes - i) + motif.repeat(nbEtoiles));
  nbEtoiles += 2;
}
console.log();

console.log("Partie D : Losange");
console.log();
nbEtoiles = 1;
for (let i = 1; i < nbLignes + 1; i++) {
  console.log(" ".repeat(nbLignes - i) + motif.repeat(nbEtoiles));
  nbEtoiles += 2;
}
nbEtoiles -= 2;
for (let i = nbLignes - 1; i > 0; i--) {
  nbEtoiles -= 2;
  console.log(" ".repeat(nbLignes - i) + motif.repeat(nbEtoiles));
}
console.log();
