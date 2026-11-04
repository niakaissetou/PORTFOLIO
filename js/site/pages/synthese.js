(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var proteger = site.proteger;
  var lien_sur = site.lien_sur;
  var a_completer = site.a_completer;

  /* ----- Tableau de synthèse : aperçu image cliquable + boutons PDF ----- */
  site.pages.synthese = function () {
    var s = d.synthese;
    var lien = proteger(lien_sur(s.pdf));
    return "<h1>Tableau de synthèse</h1><p class=\"introduction\">" + proteger(s.texte) + '</p><div class="doc_carte">' +
      (s.apercu
        ? '<a class="apercu_pdf" href="' + lien + '" target="_blank" rel="noopener" aria-label="Ouvrir le tableau de synthèse (PDF, nouvel onglet)" data-image="' + proteger(s.apercu) + '"><span class="badge_pdf" aria-hidden="true">PDF</span></a>'
        : '<span class="badge_pdf" aria-hidden="true">PDF</span>') +
      '<div class="doc_texte"><h2>' + proteger(s.titre) + "</h2><p>" + proteger(s.sous_titre) + "</p></div>" +
      (s.pdf
        ? '<div class="doc_actions"><a class="bouton" href="' + lien + '" target="_blank" rel="noopener">Ouvrir</a>' +
          '<a class="bouton secondaire" href="' + lien + '" download>Télécharger</a></div>'
        : "<div>" + a_completer("PDF à ajouter") + "</div>") + "</div>";
  };
})();
