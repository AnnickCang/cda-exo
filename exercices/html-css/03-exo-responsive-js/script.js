// 1. Selectionner les elements
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
// 2. Ecouter le clic sur le burger
burger.addEventListener("click", function () {
  // TODO : utiliser classList.toggle() pour ajouter/retirer la classe 'open' sur nav
  nav.classList.toggle("open");
});
