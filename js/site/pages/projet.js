(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir utilitaires.js) */
  var proteger = site.proteger;
  var lien_sur = site.lien_sur;
  var a_completer = site.a_completer;
  var liste_html = site.liste_html;

  /* le texte d'une section, avec "À compléter" si c'est vide ou coupé par "…" */
  function texte_section(texte) {
    if (!texte) { return a_completer(); }
    var coupe = /…$/.test(texte) ? " " + a_completer("texte complet à ajouter") : "";
    return proteger(texte) + coupe;
  }

  /* ----- Page détail d'un projet (ouverte depuis une carte) ----- */
  function page_projet(projet) {
    /* une section = un cadre avec un titre */
    function section(titre, contenu) {
      return '<section class="section_carte"><h2>' + titre + "</h2>" + contenu + "</section>";
    }
    var liste = function (phrases) { return phrases && phrases.length; };

    var html = '<a class="retour_liste" href="#realisations">← Retour aux réalisations</a>' +
      "<h1>" + proteger(projet.titre) + '</h1><p class="introduction">' + proteger(projet.resume) + "</p>";

    html += section("Contexte", "<p>" + texte_section(projet.contexte) + "</p>");
    html += section("Besoin", "<p>" + texte_section(projet.besoin) + "</p>");
    if (liste(projet.objectifs)) { html += section("Objectifs", liste_html(projet.objectifs)); }
    if (liste(projet.environnement)) {
      html += section("Environnement technique", '<div class="puces">' +
        projet.environnement.map(function (e) { return '<span class="puce">' + proteger(e) + "</span>"; }).join("") + "</div>");
    }
    html += section("Étapes", liste(projet.etapes)
      ? "<ol>" + projet.etapes.map(function (e) { return "<li>" + proteger(e) + "</li>"; }).join("") + "</ol>"
      : "<p>" + a_completer("Étapes à ajouter") + "</p>");

    /* difficultés : orange + symbole ▲ + texte, seulement s'il y en a */
    if (liste(projet.difficultes)) {
      var n = projet.difficultes.length;
      html += '<details class="difficulte" open><summary><span aria-hidden="true">▲</span> ' +
        (n > 1 ? "Difficultés rencontrées" : "Difficulté rencontrée") + " (" + n + ')</summary><div class="difficulte_corps">' +
        liste_html(projet.difficultes) + "</div></details>";
    }

    if (liste(projet.competences)) { html += section("Compétences mobilisées", liste_html(projet.competences)); }
    html += section("Résultats", liste(projet.resultats) ? liste_html(projet.resultats) : "<p>" + a_completer("Résultats à ajouter") + "</p>");

    /* captures d'écran : seulement s'il y en a ; un clic ouvre l'image en grand */
    if (liste(projet.preuves)) {
      html += section("Preuves", '<div class="preuves">' + projet.preuves.map(function (chemin) {
        return '<a href="' + proteger(lien_sur(chemin)) + '" target="_blank" rel="noopener"><img src="' + proteger(lien_sur(chemin)) +
          '" alt="Capture d\'écran du projet : ' + proteger(projet.titre) + '" loading="lazy"></a>';
      }).join("") + "</div>");
    }

    /* documentation : seulement s'il y en a une */
    if (projet.documentation) {
      html += section("Documentation", '<div class="liste_docs"><div class="ligne_doc"><span class="nom_doc">Documentation technique (PDF)</span>' +
        '<span class="boutons_doc"><a class="bouton" href="' + proteger(lien_sur(projet.documentation)) + '" target="_blank" rel="noopener">Ouvrir</a>' +
        '<a class="bouton secondaire" href="' + proteger(lien_sur(projet.documentation)) + '" download>Télécharger</a></span></div></div>');
    }
    return html;
  }

  site.page_projet = page_projet;
})();
