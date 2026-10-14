const titreH2 = document.querySelector("h2");

// titreH2.style.color = "violet";
titreH2.classList.add("bleu");

const body = document.querySelector("body");

const li = document.createElement("li");
li.textContent = "premier texte";

body.append(li);

const bouton = document.getElementById("btn");

bouton.addEventListener("click", (event) => {
  alert(event.target);
});

const btnInfo = document.querySelector("#btnInfo");
const panneau = document.querySelector("#panneauTest");

btnInfo.addEventListener("click", () => {
  panneau.classList.toggle("visible");
});
