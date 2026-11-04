(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var proteger = site.proteger;
  var lien_sur = site.lien_sur;
  var a_completer = site.a_completer;
  var compter = site.compter;
  var formater_date = site.formater_date;
  var liste_html = site.liste_html;

  /* ----- Veille : définition, dispositif, veilles (fiches + synthèse), conclusion ----- */
  site.pages.veille = function () {
    var v = d.veille;
    /* texte ou "À compléter" si vide */
    function texte(t) { return t ? proteger(t) : a_completer(); }
    /* une pastille de date, ou "À compléter" si la date est vide */
    function pastille_date(libelle, iso) {
      return iso ? '<span class="puce">' + libelle + " " + formater_date(iso) + "</span>" : a_completer(libelle + " : à compléter");
    }

    var html = "<h1>Veille technologique</h1><p class=\"introduction\">" + proteger(v.question) + "</p>";

    /* 0. rappel : qu'est-ce qu'une veille ? */
    html += '<section class="avis_boite"><h2>Qu\'est-ce qu\'une veille technologique ?</h2><p>' + texte(v.definition) + "</p></section>";

    /* 1. dispositif */
    html += '<h2 class="titre_section">Mon dispositif de veille</h2>' +
      '<div class="lignes">' +
      '<div class="ligne"><span class="cle">Mots-clés</span><span class="valeur"><span class="puces">' +
      v.mots_cles.map(function (m) { return '<span class="puce">' + proteger(m) + "</span>"; }).join("") + "</span></span></div>" +
      '<div class="ligne"><span class="cle">Fréquence</span><span class="valeur">' + texte(v.frequence) + "</span></div>" +
      '<div class="ligne"><span class="cle">Début</span><span class="valeur">' + texte(v.debut) + "</span></div>" +
      '<div class="ligne"><span class="cle">Outils</span><span class="valeur"><ul class="liste_simple">' +
      v.outils.map(function (o) { return "<li><strong>" + proteger(o.nom) + "</strong> : " + proteger(o.usage) + "</li>"; }).join("") + "</ul></span></div>" +
      "</div>";

    html += '<h3 class="titre_section">Mes alertes Google</h3><ul class="liste_simple">' +
      v.alertes.map(function (a) { return "<li><code>" + proteger(a) + "</code></li>"; }).join("") + "</ul>";

    /* 2. mes veilles : une fiche dépliable par veille, la plus récente ouverte */
    html += '<h2 class="titre_section">Mes veilles</h2><p class="introduction">De la plus ancienne à la plus récente. Chaque veille a ses articles avec un résumé et une synthèse de cette dernière.</p>';
    v.veilles.forEach(function (veille, i) {
      var syn = veille.synthese;
      html += '<details class="veille_fiche"' + (i === 0 ? " open" : "") + "><summary>Veille n°" + proteger(veille.numero) + " · " +
        (veille.date ? formater_date(veille.date) : a_completer("Date à compléter")) +
        ' <span class="puce">' + compter(veille.fiches.length, "article") + "</span></summary><div class=\"veille_corps\">" +
        "<h3>Mes articles lus</h3><div class=\"journal\">";
      veille.fiches.forEach(function (f) {
        html += '<article class="entree">' + (f.exemple ? "<p>" + a_completer("Exemple à remplacer par mon vrai article") + "</p>" : "") +
          '<div class="meta">' + pastille_date("Collectée le", f.date_collecte) + pastille_date("Article du", f.date_article) + "</div>" +
          "<h4>" + (f.url ? '<a href="' + proteger(lien_sur(f.url)) + '" target="_blank" rel="noopener">' + texte(f.titre) + "</a>" : texte(f.titre)) + "</h4>" +
          '<p class="meta">Source : ' + texte(f.source) + (f.fiabilite ? ' · <span class="puce">Fiabilité : ' + proteger(f.fiabilite) + "</span>" : "") + "</p>" +
          "<p>" + texte(f.resume) + "</p>" + "</article>";
      });
      /* synthèse de cette veille : ce que j'ai appris, réflexion et à retenir, à surveiller */
      html += "</div><h3>Synthèse de cette veille</h3>" + (syn.exemple ? "<p>" + a_completer("Exemple à remplacer par ma vraie synthèse") + "</p>" : "") +
        '<div class="synthese_veille">' +
        '<div class="mon_avis"><span class="etiquette_avis">Ce que j\'ai appris</span><p>' + texte(syn.appris) + "</p></div>" +
        '<div class="mon_avis"><span class="etiquette_avis">Réflexion et à retenir</span><p>' + texte(syn.reflexion) + "</p></div>" +
        '<div class="mon_avis"><span class="etiquette_avis">À surveiller</span>' +
        (syn.surveiller && syn.surveiller.length ? liste_html(syn.surveiller) : "<p>" + a_completer() + "</p>") + "</div></div>" +
        "</div></details>";
    });

    /* 3. conclusion de toutes les veilles (un paragraphe par \n) */
    html += '<h2 class="titre_section">Ma conclusion de toutes mes veilles</h2><section class="avis_boite">' +
      (v.conclusion
        ? v.conclusion.split("\n").map(function (para) { return "<p>" + proteger(para) + "</p>"; }).join("")
        : "<p>" + a_completer("Conclusion à rédiger") + "</p>") +
      "</section>";
    return html;
  };
})();
