let listeProduits = [
  {
    nom: "Casque bluetooth",
    prix: 89.9,
    description:
      "Autonomie : 30 heures \n Bluettoh 5.3 \n Réduction de bruit active",
  },
  {
    nom: "Enceinte bluetooth",
    prix: 49.9,
    description:
      "Autonomie : 15 heures \n Bluettoh 5.3 \n Compact, prend peu de place",
  },
  {
    nom: "Ipod",
    prix: 79.9,
    description: "Autonomie : 50 heures \n Couleur grise \n Ecran tactile",
  },
];

// Texte du bouton détails
const btnTextAfficher = "Afficher les détails";
const btnTextMasquer = "Masquer les détails";

// Message affiché au clic sur le bouton "Ajouter au panier"
const msgQuantiteInvalide = "La quantité saisie est invalide.";
const msgQuantiteAjoute = "Quantité ajoutée au panier : ";

// Naviguer dans la liste des produits (premier produit affiché au lancement)
let idProduit = 0;
$("#nomProduit").text(listeProduits[idProduit].nom);
$("#prixProduit").text(listeProduits[idProduit].prix.toFixed(2) + " €");
$("#details").text(listeProduits[idProduit].description);

function afficherProduit(idProduit) {
  $("#nomProduit").text(listeProduits[idProduit].nom);
  $("#prixProduit").text(listeProduits[idProduit].prix.toFixed(2) + " €");
  $("#details").text(listeProduits[idProduit].description);
}

$(function () {
  // Afficher le produit précédent
  $("#btnPrec").on("click", function () {
    if (idProduit === 0) {
      return;
    }
    idProduit--;
    afficherProduit(idProduit);
  });

  // Afficher le produit précédent
  $("#btnSuiv").on("click", function () {
    if (idProduit === listeProduits.length - 1) {
      return;
    }
    idProduit++;
    afficherProduit(idProduit);
  });

  // Affiche ou masque les détails
  $("#btnDetails").on("click", function () {
    if ($(this).text() === btnTextAfficher) {
      $("#details").fadeIn();
      $(this).text(btnTextMasquer);
    } else {
      $("#details").fadeOut();
      $(this).text(btnTextAfficher);
    }
  });

  // Mise à jour de la quantité commandée
  $("#btnAjouter").on("click", function () {
    const quantite = $("#quantite").val().trim();

    // Par défaut, on retire la clsse invalid
    $("#info-panier").removeClass("invalid");

    // Fin si saisie vide ou 0
    if (quantite === "" || quantite === "0") {
      $("#info-panier").text(msgQuantiteInvalide);
      $("#info-panier").addClass("invalid");
      $("#info-panier").fadeIn();
      return;
    }

    $("#info-panier").text(msgQuantiteAjoute + quantite);
    $("#info-panier").fadeIn();
  });
});
