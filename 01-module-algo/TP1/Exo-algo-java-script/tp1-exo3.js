console.log("TP1 - Exercice 3 : Echange de variables");
console.log("");

const prompt = require("prompt-sync");
let a, b;

console.log("Partie A : avec une variable temporaire");
a = 5;
b = 3;
console.log(`a = ${a} et b = ${b}`);
let temp = a;
a = b;
b = temp;
console.log(`Après échange, a = ${a} et b = ${b}`);

console.log("");
console.log("Partie B : sans variable temporaire");
a = 5;
b = 3;
console.log(`a = ${a} et b = ${b}`);
b = a + b;
a = b - a;
b = b - a;
console.log(`Après échange, a = ${a} et b = ${b}`);

console.log("");
console.log("Partie c : avec la destructuration");
a = 5;
b = 3;
console.log(`a = ${a} et b = ${b}`);
[a, b] = [b, a];
console.log(`Après échange, a = ${a} et b = ${b}`);
