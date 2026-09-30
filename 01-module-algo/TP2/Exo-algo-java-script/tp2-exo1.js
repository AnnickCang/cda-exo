console.log("TP2 - Exercice 1 : Calculatrice simple");
console.log();

const prompt = require("prompt-sync")();
let nombre1, nombre2, operateur, resultat;

nombre1 = Number(prompt("Entrez le 1er nombre : "));
nombre2 = Number(prompt("Entrez le 2nd nombre : "));
operateur = prompt("Opération (+, -, *, /) : ");

switch (operateur) {
  case "+":
    resultat = nombre1 + nombre2;
    console.log(`${nombre1} + ${nombre2} = ${resultat}`);
    break;
  case "-":
    resultat = nombre1 - nombre2;
    console.log(`${nombre1} - ${nombre2} = ${resultat}`);
    break;
  case "*":
    resultat = nombre1 * nombre2;
    console.log(`${nombre1} * ${nombre2} = ${resultat}`);
    break;
  case "/":
    if (nombre2 === 0) {
      console.log("Erreur : division par zéro");
    } else {
      resultat = nombre1 / nombre2;
      console.log(`${nombre1} / ${nombre2} = ${resultat}`);
    }
    break;
  default:
    console.log("Erreur : opérateur inconnu");
}
