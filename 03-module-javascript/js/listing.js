const stagiaires = [
  {
    nom: "Léa",
    note: 14,
  },
  {
    nom: "Karim",
    note: 8,
  },
  {
    nom: "Sophie",
    note: 17,
  },
  {
    nom: "Thomas",
    note: 11,
  },
  {
    nom: "Nora",
    note: 6,
  },
];

let stagiairesAdmis = stagiaires.filter((stagiaire) => stagiaire.note >= 10);

function moyenneGroupe() {
  let totalNote = stagiaires.reduce(
    (total, stagiaire) => total + stagiaire.note,
    0,
  );
  return (totalNote / stagiaires.length).toFixed(2);
}

function nomSansAccent(nom) {
  return nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.querySelector("#nombre").textContent = stagiaires.length;
document.querySelector("#admis").textContent = stagiairesAdmis.length;
document.querySelector("#moyenne").textContent = moyenneGroupe();

document.querySelector("#tous").addEventListener("click", function () {
  let liste = document.querySelector("#liste");
  liste.innerHTML = "";
  stagiaires.forEach((stagiaire) => {
    const { nom, note } = stagiaire;
    let classeAdmission = "";

    if (note >= 10) {
      classeAdmission = "admis";
    } else {
      classeAdmission = "non-admis";
    }

    liste.innerHTML +=
      "<p class='stagiaire " +
      classeAdmission +
      "'>" +
      "<span>" +
      nom +
      "</span>" +
      "<span>" +
      note +
      "</span></p>";
  });
});

document
  .querySelector("#admisSeulement")
  .addEventListener("click", function () {
    let liste = document.querySelector("#liste");
    liste.innerHTML = "";
    stagiaires.forEach((stagiaire) => {
      const { nom, note } = stagiaire;

      if (note >= 10) {
        liste.innerHTML +=
          "<p class='stagiaire admis'>" +
          "<span>" +
          nom +
          "</span>" +
          "<span>" +
          note +
          "</span></p>";
      }
    });
  });

document.querySelector("#rechercher").addEventListener("click", function () {
  let prenom = nomSansAccent(
    document.querySelector("#prenom").value.trim().toLowerCase(),
  );
  let stagiaire = stagiaires.find(
    (stagiaire) => nomSansAccent(stagiaire.nom.toLowerCase()) === prenom,
  );

  if (stagiaire !== undefined) {
    document.querySelector("#resultatRecherche").textContent =
      `${stagiaire.nom} (${stagiaire.note})`;
  } else {
    document.querySelector("#resultatRecherche").textContent = "";
  }
});
