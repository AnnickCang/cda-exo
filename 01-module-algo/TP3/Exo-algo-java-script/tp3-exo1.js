console.log("TP3 - Exercice 1 : Statistiques d'un tableau");
console.log();

/* 
Je pars des suppositions suivantes pour cet exercice :
  - le tableau n'est pas vide
  - le tableau contient des entiers
  - le tableau est toujours trié par ordre croissant
*/

let tableau = [10, 20, 30, 40, 50];
//let tableau = [5, 5, 5, 5];
//let tableau = [1];
//let tableau = [-3, 0, 3];

function donnerMinimum(tableau) {
  return tableau[0];
}

function donnerMaximum(tableau) {
  return tableau[tableau.length - 1];
}

function donnerMoyenne(tableau) {
  let moyenne = 0;
  for (let i = 0; i < tableau.length; i++) {
    moyenne += tableau[i];
  }
  return moyenne / tableau.length;
}

function donnerEcartType(tableau) {
  // ecartType(tab) → l'ecart-type : σ = √( Σ(xi - moyenne)² / n )
  let moyenne = donnerMoyenne(tableau);
  let nbElements = tableau.length;
  let variance = 0;

  for (let i = 0; i < nbElements; i++) {
    variance += (tableau[i] - moyenne) ** 2;
  }
  variance = variance / nbElements;

  return Math.sqrt(variance);
}

function afficherRapport(tableau) {
  console.log("Tableau :");
  console.log(tableau);
  console.log();

  console.log(`Min : ${donnerMinimum(tableau)}`);
  console.log(`Max : ${donnerMaximum(tableau)}`);
  console.log(`Moyenne : ${donnerMoyenne(tableau).toFixed(2)}`);
  console.log(`Ecart-type : ${donnerEcartType(tableau).toFixed(2)}`);
}

afficherRapport(tableau);
