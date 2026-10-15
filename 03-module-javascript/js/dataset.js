$(function () {
  $(".photo").on("click", function () {
    const srcImage = $(this).data("img");
    const nomImage = $(this).data("nom");
    $("#overlay").fadeIn();
    $("#imageAgrandie").attr("src", srcImage);
    $("#imageAgrandieNom").text(nomImage);
    $("#fenetreModale").fadeIn();
  });

  $("#fermerModale").on("click", function () {
    $("#fenetreModale").fadeOut();
    $("#overlay").fadeOut();
  });

  $("#test").on("click", function () {
    alert("oh non");
  });
});
