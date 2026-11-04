(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var id = d.informations;                   /* raccourci pour mes infos perso */
  var proteger = site.proteger;
  var lien_sur = site.lien_sur;
  var a_completer = site.a_completer;

  /* ----- Contact ----- */
  site.pages.contact = function () {
    function ligne_lien(nom, url) {
      return '<div class="ligne"><span class="cle">' + nom + '</span><span class="valeur">' +
        (url ? '<a href="' + proteger(lien_sur(url)) + '" target="_blank" rel="noopener">' + proteger(url.replace(/^https?:\/\//, "")) + "</a>" : a_completer("Lien à ajouter")) + "</span></div>";
    }
    return '<h1>Contact</h1><p class="introduction">Pour échanger sur mes projets ou sur ma recherche de stage.</p><div class="lignes">' +
      '<div class="ligne"><span class="cle">E-mail</span><span class="valeur" id="adresse_mail">' + proteger(id.email) + '</span><button type="button" id="copier_mail">Copier l\'adresse</button></div>' +
      ligne_lien("GitHub", id.github) + ligne_lien("LinkedIn", id.linkedin) +
      '<div class="ligne"><span class="cle">CV</span><span class="valeur"><a href="' + proteger(lien_sur(id.cv_pdf)) + '" target="_blank" rel="noopener">Ouvrir mon CV (PDF)</a></span></div></div>' +
      '<p id="message_copie" role="status" style="min-height:1.5em"></p>';
  };
})();
