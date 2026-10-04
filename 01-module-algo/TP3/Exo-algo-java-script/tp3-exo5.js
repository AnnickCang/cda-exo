console.log("TP3 - Exercice 5 : Mini carnet d'adresses");
console.log();

const prompt = require("prompt-sync")();

function affcherMenu() {
    console.log();
    console.log("--- MENU ---");
    console.log("1. Ajouter un contact");
    console.log("2. Rechercher par nom (partiel, insensible a la casse)");
    console.log("3. Filtrer par ville");
    console.log("4. Supprimer un contact");
    console.log("5. Afficher tous les contacts");
    console.log("6. Quitter");
    console.log();
}

function recupererChoixMenu() {
    while (true) {
        let choixMenu = prompt("Choix (1-6) : ").trim();

        if (/^[1-6]$/.test(choixMenu)) {
            return choixMenu;
        }
    }
}

function ajouterContact(carnet) {
    console.log();
    console.log("--- Ajouter un contact ---");
    console.log();
    let nom = prompt("Nom : ").trim();
    let telephone = prompt("Téléphone : ").trim();
    let email = prompt("E-mail : ").trim();
    let ville = prompt("Ville : ").trim();

    if (nom === "") {
        return;
    }

    let nomSplite = nom.split(/\s+/);
    nom = nomSplite.join(" ");
    if (carnet.has(nom.toLowerCase())) {
        let reponse = "";
        while (reponse.toLowerCase() !== "o" && reponse.toLowerCase() !== "n") {
            reponse = prompt("Ce contact existe déjà. Voulez-vous le remplacer ? (o/n) ").trim();
        }
        if (reponse.toLowerCase() === "n") {
            console.log("Ajout annulé");
            return;
        }
    }

    carnet.set(
        nom.toLowerCase(), {
            tel: telephone,
            email: email,
            ville: ville
        }
    );
}

function nomAvecUneMajuscule(nom) {
    let nomSplite = nom.split(" ");
    return nomSplite.map(mot => {
        return mot.charAt(0).toUpperCase() + mot.slice(1);
    }).join(" ");
}

function rechercherContact(carnet) {
    console.log();
    console.log("--- Rechercher par nom (partiel, insensible a la casse) ---");
    console.log();

    let nomRecherche = prompt("Nom : ").trim();
    let regex = new RegExp(RegExp.escape(nomRecherche), "i");
    let trouve = false;

    if (nomRecherche === "") {
        return;
    }

    carnet.forEach((infos, nom) => {
        if (regex.test(nom)) {
            let {tel, email, ville} = infos;
            let nomContact = nomAvecUneMajuscule(nom);
            console.log(`"${nomContact}" -> { tel: "${tel}", email: "${email}", ville: "${ville}"}`);
            trouve = true;
        }
    });

    if (!trouve) {
        console.log("Aucun contact trouvé")
    }
}

function filtrerParVille(carnet) {
    console.log();
    console.log("--- Filtrer par ville ---");
    console.log();

    let villeFiltre = prompt("Ville : ").trim().toLowerCase();
    let trouve = false;

    if (villeFiltre === "") {
        return;
    }

    carnet.forEach((infos, nom) => {
        let {tel, email, ville} = infos;
        if (ville.toLowerCase() === villeFiltre) {
            let nomContact = nomAvecUneMajuscule(nom);
            console.log(`"${nomContact}" -> { tel: "${tel}", email: "${email}", ville: "${ville}"}`);
            trouve = true;
        }
    });

    if (!trouve) {
        console.log("Aucun contact trouvé dans cette ville");
    }
}

function supprimerContact(carnet) {
    console.log();
    console.log("--- Supprimer un contact ---");
    console.log();

    let contactASupprimer = prompt("Nom : ").trim().toLowerCase();

    if (contactASupprimer === "") {
        return;
    }

    if (carnet.has(contactASupprimer)) {
        carnet.delete(contactASupprimer);
        console.log("Contact supprimé");
    } else {
        console.log("Contact non trouvé");
    }
}

function afficherContact(carnet) {
    console.log();
    console.log("--- Liste des contacts ---");
    console.log();

    carnet.forEach((infos, nom) => {
        let nomContact = nomAvecUneMajuscule(nom);
        let {tel, email, ville} = infos;

        console.log(`"${nomContact}" -> { tel: "${tel}", email: "${email}", ville: "${ville}"}`);
    });
}

let continuer = true;
let miniCarnet = new Map();

while (continuer) {
    affcherMenu();
    switch (recupererChoixMenu()) {
        case "1":
            ajouterContact(miniCarnet);
            break;
        case "2":
            rechercherContact(miniCarnet);
            break;
        case "3":
            filtrerParVille(miniCarnet);
            break;
        case "4":
            supprimerContact(miniCarnet);
            break;
        case "5":
            afficherContact(miniCarnet);
            break;
        case "6":
            continuer = false;
    }
}