const btnAjouter = document.querySelector("#btnAjouter");
const listeDesTaches = document.querySelector("#listeDesTaches");
const nbTachesText = document.querySelector("#nbTaches");
let nbTaches = 0;

btnAjouter.addEventListener("click", () => {
  const tache = document.getElementById("tache").value;
  if (tache !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    nbTaches++;
    nbTachesText.textContent = nbTaches;

    li.classList.add("ligneTache");
    span.textContent = tache;
    span.classList.add("intituleTache");
    button.textContent = "supprimer";
    button.classList.add("delete");

    li.appendChild(span);
    li.appendChild(button);
    listeDesTaches.appendChild(li);

    button.addEventListener("click", () => {
      li.remove();
      nbTaches--;
      nbTachesText.textContent = nbTaches;
    });

    span.addEventListener("click", () => {
      span.classList.toggle("texte-barre");
    });
  }
  document.getElementById("tache").value = "";
});

listeDesTaches.children.length;
