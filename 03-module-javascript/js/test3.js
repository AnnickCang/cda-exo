const rouge = document.querySelector("#rouge");
const vert = document.getElementById("vert");

vert.addEventListener("click", () => {
  // Ajoute un style inline dans la balise de l'élément avec l'id "rouge"
  //rouge.style.left = "200px";

  // Ajoute ou enlève la classe "bouge" à lélément avec l'id"rouge"
  rouge.classList.toggle("bouge");
});
