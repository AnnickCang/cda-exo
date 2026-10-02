console.log("TP3 - Exercice 2 : Gestion de liste de courses");
console.log();

const prompt = require("prompt-sync")();
let continuer = true;
let listeCourses = [];

function afficherMenu() {
  //console.clear();
  console.log("--- MENU ---");
  console.log("1. Ajouter un article");
  console.log("2. Supprimer un article (par nom)");
  console.log("3. Rechercher un article");
  console.log("4. Afficher la liste");
  console.log("5. Quitter");
  console.log();
}

function demanderChoix() {
  let choix = 0;
  const menu = [1, 2, 3, 4, 5];

  while (!menu.includes(choix)) {
    choix = Number(prompt("Choix (1 à 5): "));
  }

  return choix;
}
function trouverArticle(liste, articleRecherche) {
  // Recherche sans tenir compte de la casse
  for (let i = 0; i < liste.length; i++) {
    if (articleRecherche.toUpperCase() === liste[i].toUpperCase()) {
      return i;
    }
  }
  return -1;
}

function rechercherArticle(liste) {
  let articleRecherche = prompt("Article recherché : ");
  let index = trouverArticle(liste, articleRecherche);

  if (index >= 0) {
    console.log(
      `Rechercher "${articleRecherche}" -> Trouvé à la position ${index + 1}`,
    );
  } else {
    console.log(`Rechercher "${articleRecherche}" -> Non trouvé`);
  }
  console.log();
}

function ajouterArticle(liste) {
  let article = prompt("Article à ajouter : ");
  if (article.trim() !== "") {
    liste.push(article);
    console.log(`Ajouter "${liste[liste.length - 1]}" -> OK`);
    console.log();
  }
}

function supprimerArticle(liste) {
  let index;
  let article = prompt("Article à supprimer : ");

  if (article.trim() !== "") {
    index = trouverArticle(liste, article);
    if (index === -1) {
      console.log(`Supprimer "${article}" -> Non trouvé`);
    } else {
      /*
      tableau.splice(index, x) : supprime x éléments à partir de l'index
      tableau = ["pomme", "poire", "abricot", "banane", "coco"]
      tableau.splice(1, 2) -> tableau = ["pomme", "banane", "coco"]

      ATTENTION : différence entre splice et delete
      - splice : 
          - supprime un certain nombre d'éléments d'un tableau à partir d'un index donné
          - décale les éléments pour combler le(s) trou(s)
          - met à jour la taille du tableau
      - delete tableau[i] :
          - supprime la valeur à l'index i et la remplace par "undefined"
          - ne comble pas le trou
          - ne change pas la taille du tableau
      */
      liste.splice(index, 1);
      console.log(`Supprimer "${article}" -> OK`);
    }
  }
  console.log();
}

function afficherListe(liste) {
  let listeAffichee = "Afficher ->";

  for (let i = 0; i < liste.length; i++) {
    listeAffichee += ` ${i + 1}. ${liste[i]}`;
  }
  console.log(listeAffichee);
  console.log();
}

while (continuer) {
  afficherMenu();
  switch (demanderChoix()) {
    case 1:
      ajouterArticle(listeCourses);
      break;
    case 2:
      supprimerArticle(listeCourses);
      break;
    case 3:
      rechercherArticle(listeCourses);
      break;
    case 4:
      afficherListe(listeCourses);
      break;
    case 5: // Quitter
      continuer = false;
      break;
  }
}
