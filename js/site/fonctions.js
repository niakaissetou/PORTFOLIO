(function () {
  "use strict";

  var d = window.donnees;          /* tout mon contenu */

  /* "site" : la boîte commune où chaque fichier range ce qu'il partage
     pages : les fonctions qui construisent chaque page (une par fichier dans site/pages)
     etat  : l'outil choisi dans la page Compétences (sert à filtrer les réalisations) */
  var site = window.site = { pages: {}, etat: { outil_choisi: null } };

  /* petite fonction pour trouver un élément par son id */
  function trouver(nom) { return document.getElementById(nom); }

  /* protège le texte : empêche qu'un "<" dans mes textes casse la page */
  function proteger(texte) {
    return String(texte == null ? "" : texte).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* n'accepte que des liens sûrs : https, mailto, ancre (#) ou chemin de mes fichiers
     (lettres, chiffres, _ - . / seulement : pas de "javascript:") */
  function lien_sur(url) {
    url = String(url || "");
    return /^(https?:\/\/|mailto:|#)/.test(url) || /^[\w\-.\/]+$/.test(url) ? url : "#";
  }

  /* étiquette orange "À compléter" (bordure en pointillés + texte : pas que la couleur) */
  function a_completer(texte) {
    return '<span class="a_completer">' + proteger(texte || "À compléter") + "</span>";
  }

  /* raccourcit un texte pour les cartes */
  function raccourcir(texte, max) {
    texte = String(texte || "");
    return texte.length > max ? texte.slice(0, max).replace(/\s+\S*$/, "") + "…" : texte;
  }

  /* affiche "1 projet" ou "2 projets" */
  function compter(n, mot) { return n + " " + mot + (n > 1 ? "s" : ""); }

  /* charge une image si elle existe (essaie .svg, .png, .webp, .gif, .jpg).
     Si elle n'existe pas, le texte de secours (sigle) reste affiché. */
  function charger_image(boite, chemin, apres) {
    if (!chemin) { return; }
    var avec_extension = /\.(svg|png|webp|gif|jpe?g)$/i.test(chemin);
    var extensions = avec_extension ? [""] : [".svg", ".png", ".webp", ".gif", ".jpg"];
    var i = 0;
    function essayer() {
      if (i >= extensions.length) { return; }
      var image = new Image();
      image.alt = "";
      image.onload = function () {
        if (apres) { apres(image); } else { boite.textContent = ""; boite.appendChild(image); }
      };
      image.onerror = function () { i++; essayer(); };
      image.src = chemin + extensions[i];
    }
    essayer();
  }

  /* charge un ou plusieurs logos. S'il y en a au moins un, ils remplacent le contenu
     de la boîte (le sigle) et la boîte devient visible. Sinon rien ne change. */
  function charger_logos(boite, chemins) {
    var liste = chemins.filter(Boolean);
    var images = [];
    var attendus = liste.length;
    function fin() {
      attendus--;
      if (attendus > 0) { return; }
      var trouvees = images.filter(Boolean);
      if (!trouvees.length) { return; }
      boite.textContent = "";
      trouvees.forEach(function (image) { boite.appendChild(image); });
      boite.classList.toggle("double", trouvees.length > 1);   /* 2 logos côte à côte */
      boite.hidden = false;
    }
    liste.forEach(function (chemin, i) {
      var image = new Image();
      image.alt = "";
      image.onload = function () { images[i] = image; fin(); };
      image.onerror = fin;
      image.src = chemin;
    });
  }

  /* "2026-11-02" -> "2 novembre 2026" */
  function formater_date(iso) {
    try {
      return new Date(iso + "T00:00:00Z").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    } catch (erreur) { return iso; }
  }

  /* une liste <ul> à partir d'un tableau de phrases */
  function liste_html(phrases) {
    return "<ul>" + phrases.map(function (phrase) { return "<li>" + proteger(phrase) + "</li>"; }).join("") + "</ul>";
  }

  /* les projets qui utilisent un outil */
  function projets_avec(nom_outil) {
    return d.projets.filter(function (projet) { return projet.outils.indexOf(nom_outil) > -1; });
  }

  /* je range tout ça dans "site" pour que les autres fichiers puissent s'en servir */
  site.trouver = trouver;
  site.proteger = proteger;
  site.lien_sur = lien_sur;
  site.a_completer = a_completer;
  site.raccourcir = raccourcir;
  site.compter = compter;
  site.charger_image = charger_image;
  site.charger_logos = charger_logos;
  site.formater_date = formater_date;
  site.liste_html = liste_html;
  site.projets_avec = projets_avec;
})();
