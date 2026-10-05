console.log("TP3 - Exercice 6 : Tri de main de cartes");
console.log();

/*
Simuler une main de 7 cartes ({valeur, couleur}) et la trier par couleur puis valeur.
Valeurs : 2–10, Valet(11), Dame(12), Roi(13), As(14)
Couleurs : Trefle(1) < Carreau(2) < Coeur(3) < Pique(4)

Main initiale : 7♠, Dame♣, 3♥, As♦, 10♠, 5♥, Roi♣
Main triee    : Dame♣, Roi♣, As♦, 3♥, 5♥, 7♠, 10♠
*/

let main = [
// [valeur, couleur]
    [7,4],
    [12,1],
    [3,3],
    [14,2],
    [10,4],
    [5,3],
    [13,1],
];

function comparerCartes(carteA, carteB) {
    let valeurA = carteA[0], couleurA = carteA[1];
    let valeurB = carteB[0], couleurB = carteB[1];

    diffCouleur = couleurA - couleurB;
    diffValeur = valeurA - valeurB;

    if (diffCouleur === 0) {
        return diffValeur;
    }
    return diffCouleur;
}

console.log("Main initiale :");
console.log(main);
console.log();

for (let carteARanger = 1; carteARanger < main.length; carteARanger++) {
    let valeurCarteARanger = main[carteARanger];
    let cartePrecedente = carteARanger - 1;

    while (cartePrecedente >= 0 && comparerCartes(main[cartePrecedente], valeurCarteARanger) > 0) {
        main[cartePrecedente + 1] = main[cartePrecedente];
        cartePrecedente--;
    }

    main[cartePrecedente + 1] = valeurCarteARanger;
}

console.log("Main triée :");
console.log(main);