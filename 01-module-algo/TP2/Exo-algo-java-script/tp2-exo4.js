console.log("TP2 - Exercice 4 : Validation de mot de passe");
console.log();

const prompt = require("prompt-sync")();

function aLaTailleMinimale(chaine) {
  return chaine.length >= 8;
}

function contientMajuscule(chaine) {
  for (let c of chaine) {
    if (c >= "A" && c <= "Z") {
      return true;
    }
  }
  return false;
}

function contientMinuscule(chaine) {
  for (let c of chaine) {
    if (c >= "a" && c <= "z") {
      return true;
    }
  }
  return false;
}

function contientChiffre(chaine) {
  for (let c of chaine) {
    if (c >= "0" && c <= "9") {
      return true;
    }
  }
  return false;
}

let mdp;
let valide = true;

mdp = prompt("Mot de passe : ");

if (aLaTailleMinimale(mdp)) {
  console.log("Longueur >= 8 : V");
} else {
  valide = false;
  console.log("Longueur >= 8 : X");
}

if (contientMajuscule(mdp)) {
  console.log("Majuscule : V");
} else {
  valide = false;
  console.log("Majuscule : X");
}

if (contientMinuscule(mdp)) {
  console.log("Minuscule : V");
} else {
  valide = false;
  console.log("Minuscule : X");
}

if (contientChiffre(mdp)) {
  console.log("Chiffre : V");
} else {
  valide = false;
  console.log("Chiffre : X");
}

if (valide) {
  console.log("Valide ? V");
} else {
  console.log("Valide ? X");
}
