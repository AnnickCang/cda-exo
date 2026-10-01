console.log("TP2 - Exercice 5 : Table de multiplication formatée");
console.log();

let nbTablesMultiplication = 25;
let ligneResultats, ligneEntete;
let largeurCase = (nbTablesMultiplication ** 2).toString().length + 1;
let largeurColonneEntete = nbTablesMultiplication.toString().length + 2;

// Ligne d'entête
ligneEntete = "".padStart(largeurColonneEntete, " ") + "| ";
for (let i = 1; i < nbTablesMultiplication + 1; i++) {
  ligneEntete += i.toString().padStart(largeurCase, " ");
}
console.log(ligneEntete);
console.log("-".repeat(ligneEntete.length + 3));

for (let i = 1; i < nbTablesMultiplication + 1; i++) {
  ligneResultats = (i.toString() + " ").padStart(largeurColonneEntete, " ") + "| ";
  for (let j = 1; j < nbTablesMultiplication + 1; j++) {
    ligneResultats += (i * j).toString().padStart(largeurCase, " ");
  }
  console.log(ligneResultats);
}
