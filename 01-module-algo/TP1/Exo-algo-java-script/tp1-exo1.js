console.log("TP1 - Exercice 1 : Conversion de températures");
console.log("");

const readLine = require("readline");
const conversion = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

conversion.question(
  "Entrez une température en degrés Celsius : ",
  (tempCel) => {
    let tempFahr = (tempCel * 9) / 5 + 32;
    console.log(
      `Voici la température convertie en degrés Fahrenheit : ${tempFahr}`,
    );
    conversion.close();
  },
);
