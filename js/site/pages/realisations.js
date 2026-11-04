(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var etat = site.etat;                  /* ce que le site retient (outil choisi) */
  var proteger = site.proteger;
  var raccourcir = site.raccourcir;
  var compter = site.compter;
  var projets_avec = site.projets_avec;

  /* ----- Réalisations : la liste des cartes ----- */
  site.pages.realisations = function () {
    var liste = etat.outil_choisi ? projets_avec(etat.outil_choisi) : d.projets;
    var html = '<h1>Réalisations</h1><p class="introduction">Mes projets. Je clique sur une carte pour voir le détail et la documentation.</p>';

    /* bandeau quand un outil a été choisi dans Compétences */
    if (etat.outil_choisi) {
      html += '<div class="filtre"><span>Outil choisi : <strong>' + proteger(etat.outil_choisi) + "</strong> (" + compter(liste.length, "projet") +
        ')</span><button type="button" id="tout_afficher">Tout afficher</button></div>';
    }
    if (!liste.length) { return html + "<p>Aucun projet n'utilise encore cet outil.</p>"; }

    html += '<div class="grille">';
    liste.forEach(function (projet) {
      html += '<a class="carte carte_projet" href="#projet-' + proteger(projet.id) + '">' +
        '<h2><span>' + proteger(projet.titre) + '</span><span class="fleche" aria-hidden="true">→</span></h2>' +
        '<p class="resume">' + proteger(projet.resume) + "</p>" +
        '<p class="extrait"><strong>Contexte :</strong> ' + proteger(raccourcir(projet.contexte, 110)) + "</p>" +
        '<p class="extrait"><strong>Besoin :</strong> ' + proteger(raccourcir(projet.besoin, 110)) + "</p>" +
        '<div class="puces">' + projet.outils.map(function (o) { return '<span class="puce">' + proteger(o) + "</span>"; }).join("") + "</div></a>";
    });
    return html + "</div>";
  };
})();
