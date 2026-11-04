(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var proteger = site.proteger;
  var compter = site.compter;
  var projets_avec = site.projets_avec;

  /* ----- Compétences ----- */
  site.pages.competences = function () {
    var html = '<h1>Compétences</h1><p class="introduction">Les langages, systèmes et outils que j\'utilise en formation et en stage. Un clic sur un outil ouvre un exemple de(s) réalisation(s) où je l\'ai utilisé.</p><div class="familles">';
    d.outils.forEach(function (famille) {
      html += '<section class="famille"><header><h2>' + proteger(famille.categorie) + '</h2><span class="compte">' +
        compter(famille.liste.length, "outil") + '</span></header><ul class="pastilles">';
      famille.liste.forEach(function (outil) {
        var n = projets_avec(outil.nom).length;
        html += '<li><button type="button" class="pastille" data-outil="' + proteger(outil.nom) + '">' +
          '<span class="logo" data-logos="' + proteger((outil.logos || []).join("|")) + '"><span class="sigle">' + proteger(outil.sigle) + "</span></span>" +
          "<span>" + proteger(outil.nom).replace("/", "/<wbr>") + (n ? "<small>" + compter(n, "projet") + "</small>" : "") + "</span></button></li>";
      });
      html += "</ul></section>";
    });
    html += "</div>";

    /* blocs du référentiel : niveau en carrés pleins/vides + mot (pas que la couleur) */
    return html;
  };
})();
