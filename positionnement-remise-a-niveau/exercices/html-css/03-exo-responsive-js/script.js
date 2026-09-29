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
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // nav.classList.toggle("open");
    // mieux d'utiliser .remove au lieu de .toggle si le but est de supprimer cette classe
    nav.classList.remove("open");
  });
});

// Ajouter ou supprimer le thème dark au body lors du clic sur le bouton "Sombre"
const themeButton = document.getElementById("theme-toggle");
const body = document.querySelector("body");
themeButton.addEventListener("click", function () {
  // Solution en récupérant le résultat de .toggle()
  /*
  let isDarkTheme = body.classList.toggle("dark");
  if (isDarkTheme) {
    themeButton.textContent = "Clair";
  } else {
    themeButton.textContent = "Sombre";
  }*/
  // Solution en utilisant .contains()
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeButton.textContent = "Clair";
  } else {
    themeButton.textContent = "Sombre";
  }
});

// Envoyer un message (envoi annulé par défaut) avec affichage de message (envoi réussi ou champ manquant)
// Sélection du bouton en fonction de son type
const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", function (event) {
  // Annuler l'envoi
  event.preventDefault();

  // Vérification des champs et affichage d'un message popup en fonction du remplissage ou non de ces champs
  const nameText = document.getElementById("name");
  const emailText = document.getElementById("email");
  const messageText = document.getElementById("message");

  if (
    nameText.value === "" ||
    emailText.value === "" ||
    messageText.value === ""
  ) {
    alert("Tous les champs doivent être remplis !");
  } else {
    alert(`Merci ${nameText.value}, votre message a bien été envoyé`);
  }
});
