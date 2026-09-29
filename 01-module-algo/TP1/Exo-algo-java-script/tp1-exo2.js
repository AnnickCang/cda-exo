console.log("TP1 - Exercice 2 : Calcul de prix TTC avec remise");
console.log("");

const prompt = require("prompt-sync")();
let prixHT, prixTTC, prixFinal;
let tauxTVA, montantTVA;
let pourcentageRemise, montantRemise;

prixHT = Number(prompt("Prix HT de l'article : "));
tauxTVA = Number(prompt("Taux de TVA en % : "));
pourcentageRemise = Number(prompt("Pourcentage de remise : "));

montantTVA = (prixHT * tauxTVA) / 100;
prixTTC = prixHT + montantTVA;
montantRemise = (prixTTC * pourcentageRemise) / 100;
prixFinal = prixTTC - montantRemise;

console.log("");
console.log(`Prix HT : ${prixHT}`);
console.log(`TVA (%) : ${tauxTVA}`);
console.log(`Remise (%) : ${pourcentageRemise}`);
console.log(`Montant TVA : ${montantTVA}`);
console.log(`Prix TTC : ${prixTTC}`);
console.log(`Montant remise : ${montantRemise}`);
console.log(`Prix final : ${prixFinal}`);
