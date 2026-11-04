(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir utilitaires.js) */
  var d = window.donnees;                /* tout mon contenu (dossier js/data) */
  var etat = site.etat;                  /* ce que le site retient (outil choisi) */
  var trouver = site.trouver;
  var proteger = site.proteger;
  var charger_image = site.charger_image;
  var charger_logos = site.charger_logos;

  /* liste du menu de gauche : [adresse, nom affiché, icône] */
  var menu = [
    ["parcours", "Parcours", "icone_dossier"],
    ["realisations", "Réalisations", "icone_dossier"],
    ["competences", "Compétences", "icone_dossier"],
    ["veille", "Veille", "icone_dossier"],
    ["synthese", "Tableau de synthèse", "icone_dossier"],
    ["contact", "Contact", "icone_dossier"],
    ["corbeille", "Corbeille", "icone_corbeille"]
  ];

  /* ---------- 4. NAVIGATION (le "routeur") ----------
     L'adresse après le # décide de la page : #parcours, #realisations, #projet-m2l... */
  var zone_accueil = trouver("zone_accueil");
  var zone_pages = trouver("zone_pages");
  var zone_texte = trouver("zone_texte");
  var nom_page = trouver("nom_page");
  var liste_pages = trouver("liste_pages");

  /* menu de gauche : la page en cours reçoit aria-current (cadre + point, pas que la couleur) */
  function afficher_menu(page_actuelle) {
    liste_pages.innerHTML = menu.map(function (ligne) {
      return '<li><a href="#' + ligne[0] + '"' + (ligne[0] === page_actuelle ? ' aria-current="page"' : "") +
        '><svg viewBox="0 0 120 96" aria-hidden="true"><use href="#' + ligne[2] + '"/></svg>' + proteger(ligne[1]) + "</a></li>";
    }).join("");
  }

  function afficher() {
    var adresse = (location.hash || "").replace("#", "");
    var projet = null;

    /* adresse d'un projet : "projet-m2l" -> on cherche le projet "m2l" */
    if (adresse.indexOf("projet-") === 0) {
      var id_projet = adresse.slice(7);
      projet = d.projets.filter(function (p) { return p.id === id_projet; })[0] || null;
      adresse = "realisations";
    }

    /* adresse inconnue ou vide : retour à l'accueil */
    if (!site.pages[adresse]) {
      zone_pages.hidden = true;
      zone_accueil.hidden = false;
      return;
    }

    var nom = menu.filter(function (ligne) { return ligne[0] === adresse; })[0][1];
    zone_accueil.hidden = true;
    zone_pages.hidden = false;
    nom_page.textContent = projet ? "Réalisations · " + projet.titre : nom;
    afficher_menu(adresse);
    zone_texte.innerHTML = projet ? site.page_projet(projet) : site.pages[adresse]();

    /* bouton "Tout afficher" du filtre */
    var tout_afficher = trouver("tout_afficher");
    if (tout_afficher) { tout_afficher.onclick = function () { etat.outil_choisi = null; afficher(); }; }

    /* logos des outils (Compétences) et des organismes (Parcours) */
    zone_texte.querySelectorAll(".logo[data-logos]").forEach(function (boite) {
      charger_logos(boite, boite.getAttribute("data-logos").split("|"));
    });

    /* clic sur un outil : on ouvre les réalisations filtrées */
    zone_texte.querySelectorAll(".pastille[data-outil]").forEach(function (bouton) {
      bouton.addEventListener("click", function () {
        etat.outil_choisi = bouton.getAttribute("data-outil");
        location.hash = "realisations";
      });
    });

    /* aperçu du tableau de synthèse : l'image remplace le badge "PDF" si elle existe */
    zone_texte.querySelectorAll(".apercu_pdf[data-image]").forEach(function (boite) {
      charger_image(boite, boite.getAttribute("data-image"), function (image) {
        image.alt = "Aperçu du tableau de synthèse";
        boite.textContent = "";
        boite.appendChild(image);
      });
    });

    /* image de la blague (chargée seulement quand la page Corbeille est affichée) */
    zone_texte.querySelectorAll(".image_blague[data-image]").forEach(function (boite) {
      charger_image(boite, boite.getAttribute("data-image"));
    });

    /* bouton "Copier l'adresse" (page Contact) */
    var copier = trouver("copier_mail");
    if (copier) {
      copier.onclick = function () {
        var message = trouver("message_copie");
        var adresse_mail = trouver("adresse_mail").textContent;
        function echec() { message.textContent = "Copie impossible : sélectionne l'adresse à la main."; }
        try {
          navigator.clipboard.writeText(adresse_mail).then(function () { message.textContent = "Adresse copiée."; }, echec);
        } catch (erreur) { echec(); }
      };
    }

    /* retour en haut et focus sur le titre (utile au clavier et aux lecteurs d'écran) */
    window.scrollTo(0, 0);
    var titre = zone_texte.querySelector("h1");
    if (titre) { titre.setAttribute("tabindex", "-1"); titre.focus({ preventScroll: true }); }
  }
  window.addEventListener("hashchange", afficher);

  site.afficher = afficher;
})();
