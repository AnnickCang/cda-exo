document.querySelector("#calculer").addEventListener("click", function () {
  let quantite = Number(document.querySelector("#quantite").value);

  let tarifReduit = document.querySelector("#tarifReduit").value;

  let assurance = document.querySelector("#assurance").value;

  let codePromo = document.querySelector("#codePromo").value;

  const prixBillet = 25;
  const tauxReduction = 0.1;
  const prixAssurance = 2;
  const promo10 = "promo10";
  const promo20 = "promo20";

  let frais = 5;
  let reduction = 0;
  let totalAssurance = 0;

  let sousTotal = quantite * prixBillet;

  if (tarifReduit.toLowerCase() === "oui") {
    reduction = sousTotal * tauxReduction;
  }

  if (assurance.toLowerCase() === "oui") {
    totalAssurance = quantite * prixAssurance;
  }

  if (sousTotal >= 100) {
    frais = 0;
  }

  let total = sousTotal - reduction + totalAssurance + frais;

  switch (codePromo.toLowerCase()) {
    case promo10:
      total = total * 0.9;
      break;
    case promo20:
      total = total * 0.8;
      break;
  }

  document.querySelector("#sousTotal").textContent =
    sousTotal.toFixed(2) + " €";
  document.querySelector("#reduction").textContent =
    reduction.toFixed(2) + " €";
  document.querySelector("#prixAssurance").textContent =
    totalAssurance.toFixed(2) + " €";
  document.querySelector("#frais").textContent = frais.toFixed(2) + " €";
  document.querySelector("#total").textContent = total.toFixed(2) + " €";

  if (frais === 0) {
    document.querySelector("#message").textContent = "Frais de dossier offert";
  } else {
    document.querySelector("#message").textContent =
      frais + " € de frais de dossier";
  }
});
