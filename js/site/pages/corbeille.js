(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var proteger = site.proteger;
  var lien_sur = site.lien_sur;
  var a_completer = site.a_completer;

  /* ----- Corbeille (la blague) ----- */
  site.pages.corbeille = function () {
    var c = d.corbeille;
    var html = "<h1>Corbeille</h1><p class=\"introduction\">" + (c.intro ? proteger(c.intro) : a_completer("Contenu à définir")) + "</p>";
    if (!c.elements || !c.elements.length) {
      return html + '<div class="vide"><svg viewBox="0 0 120 96" aria-hidden="true"><use href="#icone_corbeille"/></svg><p><strong>La corbeille est vide pour l\'instant.</strong></p></div>';
    }
    html += '<div class="fichiers">';
    c.elements.forEach(function (element) {
      var b = element.blague;
      var corps = "<p>" + proteger(element.texte || "") + "</p>";
      if (b) {
        corps = "<strong>" + proteger(b.titre) + "</strong>" +
          (b.image ? '<span class="image_blague" data-image="' + proteger(b.image) + '"></span>' : "") +
          "<p>" + proteger(b.texte) + "</p>" +
          (b.lien ? '<a class="bouton" href="' + proteger(lien_sur(b.lien)) + '" target="_blank" rel="noopener">' + proteger(b.lien_texte || "Ouvrir") + "</a>" : "");
      }
      /* la blague reste fermée : il faut cliquer sur le fichier pour l'ouvrir */
      html += '<details class="fichier"><summary><span class="puce">' + proteger(element.type || "TXT") + "</span><span>" + proteger(element.nom) +
        '</span><span class="meta">' + proteger(element.meta || "") + '</span></summary><div class="blague">' + corps + "</div></details>";
    });
    return html + "</div>";
  };
})();
