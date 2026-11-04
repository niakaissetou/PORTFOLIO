(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var id = d.informations;                   /* raccourci pour mes infos perso */
  var trouver = site.trouver;
  var lien_sur = site.lien_sur;
  var charger_image = site.charger_image;

  trouver("formation").textContent = id.formation;
  trouver("session").textContent = id.session;
  trouver("sous_titre").textContent = id.sous_titre;
  trouver("nom").textContent = id.nom;

  /* photo dans le cercle (si j'ai mis un chemin dans data.js) */
  if (id.photo) {
    charger_image(trouver("photo"), id.photo, function (image) {
      var photo = trouver("photo");
      photo.textContent = "";
      photo.appendChild(image);
    });
  }

  /* barre du bas : mes liens */
  trouver("lien_cv").href = lien_sur(id.cv_pdf);

  var lien_github = trouver("lien_github");
  if (id.github) { lien_github.href = lien_sur(id.github); }
  else { lien_github.href = "#contact"; lien_github.removeAttribute("target"); }

  var lien_linkedin = trouver("lien_linkedin");
  if (id.linkedin) { lien_linkedin.href = lien_sur(id.linkedin); lien_linkedin.target = "_blank"; lien_linkedin.rel = "noopener"; }

  trouver("lien_mail").href = id.email ? "mailto:" + encodeURI(id.email) : "#contact";

  /* logos : le site prend doc-img/logos/cv.svg, doc-img/logos/github.png, etc. s'ils existent */
  charger_image(trouver("logo_cv"), "doc-img/logos/cv");
  charger_image(trouver("logo_github"), "doc-img/logos/github");
  charger_image(trouver("logo_linkedin"), "doc-img/logos/linkedin");
  charger_image(trouver("logo_mail"), "doc-img/logos/mail");
})();
