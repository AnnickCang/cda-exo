/*
{
    "userId": 1,
    "id": 1,
    "title": "fdfds"
    "body": "fdfsd"
  },
*/

async function recupererDonnees() {
  try {
    const reponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6",
    );
    if (!reponse.ok) {
      return null;
    }
    donnees = await reponse.json();
    return donnees;
  } catch (erreur) {
    console.error("Erreur lors de la requête :", erreur);
  }
}

$(function () {
  $("#btnCharger").on("click", function () {
    recupererDonnees().then((donnees) => {
      if (donnees) {
        //$("#catalogue").hide();
        donnees.forEach((element) => {
          const article = $("<article>");
          const titre = $("<h2>");
          const contenu = $("<p>");

          article.addClass("card");
          titre.text(element.title);
          contenu.text(element.body);

          article.append(titre);
          article.append(contenu);

          $("#catalogue").append(article);
          /*
          const affichageDecale = new Promise((resolve) => {
            setTimeout(() => {
              $("#catalogue").append(article);
              article.show(250);
              resolve();
            }, 2000);
          });
          affichageDecale.then();*/
        });
        //$("#catalogue").show(500, "linear");
        $("#catalogue")
          .children()
          .each(function () {
            setTimeout(() => {
              $(this).fadeIn("slow", "linear");
            }, 1000);
            //            $(this).fadeIn("slow", "linear");
          });
      }
    });
  });
});
