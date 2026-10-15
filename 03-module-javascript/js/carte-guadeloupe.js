$(document).ready(function () {
  $(".ville-survolee").on("mouseenter", function () {
    const idpointSurCarte = "point" + $(this).text().trim();
    $(`#${idpointSurCarte}`).addClass("point-sur-carte-selection");
    $(this).addClass("ville-selectionne");
  });
  $(".ville-survolee").on("mouseleave", function () {
    const idpointSurCarte = "point" + $(this).text().trim();
    $(`#${idpointSurCarte}`).removeClass("point-sur-carte-selection");
    $(this).removeClass("ville-selectionne");
  });
});
