console.log("TP3 - Exercice 4 : Détecteur de doublons");
console.log();

// Avec des boucles imbriquées : complexité O(n3) (n au cube)
function doublesNaif(tab) {
    let tableauUniques = [];
    let tableauDoublons = [];
    
    tableauUniques.push(tab[0]);
    for (let i = 1; i < tab.length; i++) {
        let estUnDoublon = false;
        for (let j = 0; j < tableauUniques.length; j++) {
            if (tab[i] === tableauUniques[j]) {

                for (let k = 0; k < tableauDoublons.length; k++) {
                    if (tab[i] === tableauDoublons[k]) {
                        estUnDoublon = true;
                        break;
                    }
                }
                if (!estUnDoublon) {
                    tableauDoublons.push(tab[i]);
                    estUnDoublon = true;
                }
                break;
            }
        }
        if (!estUnDoublon) {
            tableauUniques.push(tab[i]);
        }
    }

    return tableauDoublons;
}

// Avec des boucles imbriquées et Array.includes() : même complexité que doublesNaif mais avec une écriture allégée
function doublesNaif2(tab) {
    let tableauUniques = [];
    let tableauDoublons = [];

    for (let i = 0; i < tab.length; i++) {
        if (tableauUniques.includes(tab[i])) {
            if (!tableauDoublons.includes(tab[i])) {
                tableauDoublons.push(tab[i]);
            }
        } else {
            tableauUniques.push(tab[i]);
        }
    }

    return tableauDoublons;
}

// Avec des Sets : complexité O(n)
function doublesSet(tab) {
    let valeursDejaVues = new Set();
    let tableauDoublons = new Set();

    for (let i = 0; i < tab.length; i++) {
        if (valeursDejaVues.has(tab[i])) {
            tableauDoublons.add(tab[i]);
        }
        valeursDejaVues.add(tab[i]);
    }

    return tableauDoublons;
}

let tableauTest = [];

tableauTest = [1, 2, 3, 2, 4, 3, 5];
console.log("Tableau de test : ", tableauTest);
console.log("Avec boucles imbriquées : ", doublesNaif(tableauTest));
console.log("Avec boucles imbriquées et .includes() : ", doublesNaif2(tableauTest));
console.log("Avec Sets : ", doublesSet(tableauTest));
console.log()

tableauTest = [1, 2, 3, 4, 5];
console.log("Tableau de test : ", tableauTest);
console.log("Avec boucles imbriquées : ", doublesNaif(tableauTest));
console.log("Avec boucles imbriquées et .includes() : ", doublesNaif2(tableauTest));
console.log("Avec Sets : ", doublesSet(tableauTest));
console.log()

tableauTest = [1, 1, 1, 1];
console.log("Tableau de test : ", tableauTest);
console.log("Avec boucles imbriquées : ", doublesNaif(tableauTest));
console.log("Avec boucles imbriquées et .includes() : ", doublesNaif2(tableauTest));
console.log("Avec Sets : ", doublesSet(tableauTest));
console.log()

tableauTest = [];
console.log("Tableau de test : ", tableauTest);
console.log("Avec boucles imbriquées : ", doublesNaif(tableauTest));
console.log("Avec boucles imbriquées et .includes() : ", doublesNaif2(tableauTest));
console.log("Avec Sets : ", doublesSet(tableauTest));
console.log()