(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var proteger = site.proteger;

  /* ----- Parcours : formations puis stages ----- */
  site.pages.parcours = function () {
    function groupe(type, titre) {
      var etapes = d.parcours.filter(function (e) { return e.type === type; });
      if (!etapes.length) { return ""; }
      var html = '<h2 class="titre_section">' + titre + '</h2><ol class="chronologie">';
      etapes.forEach(function (e) {
        html += '<li><span class="quand">' + proteger(e.periode) + '</span><div class="etape">' +
          (e.logo ? '<span class="logo" data-logos="' + proteger(e.logo) + '" hidden></span>' : "") +
          '<div class="etape_texte"><h3>' + proteger(e.titre) + '</h3><p class="lieu">' + proteger(e.organisme) + " · " + proteger(e.lieu) + "</p>" +
          (e.description ? "<p>" + proteger(e.description) + "</p>" : "") +
          (e.missions ? '<ul class="missions">' + e.missions.map(function (m) { return "<li>" + proteger(m) + "</li>"; }).join("") + "</ul>" : "") +
          "</div></div></li>";
      });
      return html + "</ol>";
    }
    return '<h1>Parcours</h1><p class="introduction">Ma formation et mes stages, du plus récent au plus ancien.</p>' +
      groupe("formation", "Formations") + groupe("stage", "Stages");
  };
})();
