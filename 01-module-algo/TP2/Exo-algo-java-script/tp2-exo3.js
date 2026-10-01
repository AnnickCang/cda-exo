console.log("TP2 - Exercice 3 : FizzBuzz amélioré")
console.log()

function getFizzbuzzResult(nombre) {
    let texte = "";

    if ((nombre % 3) === 0) {
        texte += "Fizz";
    }
    if ((nombre % 5) === 0) {
        texte += "Buzz";
    }
    if ((nombre % 7) === 0) {
        texte += "Wazz";
    }
    if (texte === "") {
        texte = toString(nombre);
    }

    return texte;
}

let texte = "";
for (let i = 1; i < 22; i++) {
    texte += getFizzbuzzResult(i) + " ";
}
console.log(texte);

/*
## 

DEBUT
  FONCTION getFizzbuzzResult(nombre : ENTIER) : CHAINE
  DEBUT
    VARIABLE texte : CHAINE

    texte <- ""

    SI ((nombre MOD 3) = 0)
      texte <- texte + "Fizz"
    FIN SI
    SI ((nombre MOD 5) = 0)
      texte <- texte + "Buzz"
    FIN SI
    SI ((nombre MOD 7) = 0)
      texte <- texte + "Wazz"
    FIN SI
    SI (texte = "")
      texte <- (CHAINE) nombre // nombre est casté en CHAINE
    FIN SI

    RETOURNER texte
  FIN

  VARIABLE i : ENTIER
  VARIABLE texte : CHAINE
  
  texte <- ""

  POUR i ALLANT DE 1 A 21 FAIRE
    texte <- textte + getFizzbuzzResult(i)
  FIN POUR
  ECRIRE(texte)
FIN
*/