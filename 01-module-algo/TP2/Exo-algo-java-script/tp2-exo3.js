console.log("TP2 - Exercice 3 : FizzBuzz amélioré");
console.log();

function getFizzbuzzResult(nombre) {
  let texte = "";

  if (nombre % 3 === 0) {
    texte += "Fizz";
  }
  if (nombre % 5 === 0) {
    texte += "Buzz";
  }
  if (nombre % 7 === 0) {
    texte += "Wazz";
  }
  if (texte === "") {
    texte = nombre;
    texte.toString();
  }

  return texte;
}

let texte = "";
for (let i = 1; i < 22; i++) {
  texte += getFizzbuzzResult(i) + " ";
}
console.log(texte);
