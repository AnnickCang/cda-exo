console.log("TP3 - Exercice 7 : Generateur de statistiques de texte");
console.log();

const prompt = require("prompt-sync")();
let texte = prompt("Texte : "); // ATTENTION : si vide texte vaudra null

if (texte !== "") {
  let listeMots = texte.trim().split(/[.!?,;:\s]+/);
  let texteSansEspace = listeMots.join("");
  let nombreDePhrase = texte.match(/[.!?]+/g); // ATTENTION : renvoie null et pas un tableau vide si rien trouvé
  let indexMotLePlusLong,
    longueurMax = 0;
  let mapCompteurMots = new Map();
  let listeTop5 = [];
  let mapDistribution = new Map();

  for (let i = 0; i < listeMots.length; i++) {
    if (listeMots[i].length > longueurMax) {
      longueurMax = listeMots[i].length;
      indexMotLePlusLong = i;
    }

    if (mapCompteurMots.has(listeMots[i])) {
      let quantite = mapCompteurMots.get(listeMots[i]);
      mapCompteurMots.set(listeMots[i], quantite + 1);
    } else {
      mapCompteurMots.set(listeMots[i], 1);
    }

    if (mapDistribution.has(listeMots[i].length)) {
      let quantite = mapDistribution.get(listeMots[i].length);
      mapDistribution.set(listeMots[i].length, quantite + 1);
    } else {
      mapDistribution.set(listeMots[i].length, 1);
    }
  }

  let motsDejaDansListeTop5 = new Set();
  do {
    let plusGrandeQuantite = 0;
    let motAAjouterDansTop5;
    mapCompteurMots.forEach((quantite, mot) => {
      if ((quantite > plusGrandeQuantite) && !motsDejaDansListeTop5.has(mot)) {
        plusGrandeQuantite = quantite;
        motAAjouterDansTop5 = mot;
      }
    });
    listeTop5.push(`${motAAjouterDansTop5} (${plusGrandeQuantite})`);
    motsDejaDansListeTop5.add(motAAjouterDansTop5);
    if (listeTop5.length === listeMots.length) {
      break;
    }
  } while (listeTop5.length < 5);

  console.log(`Caracteres (avec espaces) : ${texte.length}`);
  console.log(`Caracteres (sans espaces) : ${texteSansEspace.length}`);
  console.log(`Nombre de mots : ${listeMots.length}`);
  console.log(
    `Nombre de phrases : ${nombreDePhrase === null ? 0 : nombreDePhrase.length}`,
  );
  console.log(
    `Longueur moyenne des mots : ${(
      texteSansEspace.length / listeMots.length
    ).toFixed(2)}`,
  );
  console.log(
    `Mot le plus long : ${listeMots[indexMotLePlusLong]} (${longueurMax})`,
  );
  console.log(`Top 5 : ${listeTop5.join(", ")}`);
  console.log("Distribution :");
  for (let i = 1; i <= longueurMax; i++) {
    if (mapDistribution.has(i)) {
      console.log(`${i} lettre(s) : ${mapDistribution.get(i)}`)
    }
  }
}
