const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
});

/* Boucle sur une HTMLCollection
const navLinks = document.getElementsByClassName("header__nav-link");
for (let navLink of navLinks) {
  navLink.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}*/

// Boucle avec un objet Node
const navLinks = document.querySelectorAll("a.header__nav-link");
/*const navLinks = document.querySelectorAll(".header__nav-link");
fonctionne aussi et est moins restrictif*/
navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});