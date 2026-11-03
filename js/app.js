/* ============================================================
   app.js : le fonctionnement du site.
   Il lit mon contenu dans data.js (window.donnees) et construit les pages.
   Normalement je n'ai rien à modifier ici.
   ============================================================ */
(function () {
  "use strict";

  var d = window.donnees;          /* tout mon contenu */
  var id = d.identite;             /* raccourci pour mes infos perso */

  /* petite fonction pour trouver un élément par son id */
  function trouver(nom) { return document.getElementById(nom); }

  /* ---------- 1. FONCTIONS UTILES ---------- */

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

  /* ---------- 2. ACCUEIL : je remplis ce qui vient de data.js ---------- */
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

  /* logos : le site prend logo/cv.svg, logo/github.png, etc. s'ils existent */
  charger_image(trouver("logo_cv"), "logo/cv");
  charger_image(trouver("logo_github"), "logo/github");
  charger_image(trouver("logo_linkedin"), "logo/linkedin");
  charger_image(trouver("logo_mail"), "logo/mail");

  /* ---------- 3. LES PAGES ---------- */

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

  /* outil choisi dans la page Compétences (sert à filtrer les réalisations) */
  var outil_choisi = null;

  /* les projets qui utilisent un outil */
  function projets_avec(nom_outil) {
    return d.projets.filter(function (projet) { return projet.outils.indexOf(nom_outil) > -1; });
  }

  /* le texte d'une section, avec "À compléter" si c'est vide ou coupé par "…" */
  function texte_section(texte) {
    if (!texte) { return a_completer(); }
    var coupe = /…$/.test(texte) ? " " + a_completer("texte complet à ajouter") : "";
    return proteger(texte) + coupe;
  }

  /* chaque page est une fonction qui renvoie le HTML à afficher */
  var pages = {

    /* ----- Parcours : formations puis stages ----- */
    parcours: function () {
      function groupe(type, titre) {
        var etapes = d.parcours.filter(function (e) { return e.type === type; });
        if (!etapes.length) { return ""; }
        var html = '<h2 class="titre_section">' + titre + '</h2><ol class="chronologie">';
        etapes.forEach(function (e) {
          html += '<li><span class="quand">' + proteger(e.periode) + '</span><div class="etape">' +
            (e.logo ? '<span class="logo" data-logos="' + proteger(e.logo) + '" hidden></span>' : "") +
            '<div class="etape_texte"><h3>' + proteger(e.titre) + '</h3><p class="lieu">' + proteger(e.organisme) + " · " + proteger(e.lieu) + "</p>" +
            (e.description ? "<p>" + proteger(e.description) + "</p>" : "") +
            (e.missions ? '<ul class="missions">' + e.missions.map(function (m) { return "<li>" + proteger(m) + "</li>"; }).join("") + "</ul>" : "") +
            "</div></div></li>";
        });
        return html + "</ol>";
      }
      return '<h1>Parcours</h1><p class="introduction">Ma formation et mes stages, du plus récent au plus ancien.</p>' +
        groupe("formation", "Formations") + groupe("stage", "Stages");
    },

    /* ----- Réalisations : la liste des cartes ----- */
    realisations: function () {
      var liste = outil_choisi ? projets_avec(outil_choisi) : d.projets;
      var html = '<h1>Réalisations</h1><p class="introduction">Mes projets. Je clique sur une carte pour voir le détail et la documentation.</p>';

      /* bandeau quand un outil a été choisi dans Compétences */
      if (outil_choisi) {
        html += '<div class="filtre"><span>Outil choisi : <strong>' + proteger(outil_choisi) + "</strong> (" + compter(liste.length, "projet") +
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
    },

    /* ----- Compétences ----- */
    competences: function () {
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
    },

    /* ----- Veille : définition, dispositif, veilles (fiches + synthèse), conclusion ----- */
    veille: function () {
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
    },

    /* ----- Tableau de synthèse : aperçu image cliquable + boutons PDF ----- */
    synthese: function () {
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
    },

    /* ----- Contact ----- */
    contact: function () {
      function ligne_lien(nom, url) {
        return '<div class="ligne"><span class="cle">' + nom + '</span><span class="valeur">' +
          (url ? '<a href="' + proteger(lien_sur(url)) + '" target="_blank" rel="noopener">' + proteger(url.replace(/^https?:\/\//, "")) + "</a>" : a_completer("Lien à ajouter")) + "</span></div>";
      }
      return '<h1>Contact</h1><p class="introduction">Pour échanger sur mes projets ou sur ma recherche de stage.</p><div class="lignes">' +
        '<div class="ligne"><span class="cle">E-mail</span><span class="valeur" id="adresse_mail">' + proteger(id.email) + '</span><button type="button" id="copier_mail">Copier l\'adresse</button></div>' +
        ligne_lien("GitHub", id.github) + ligne_lien("LinkedIn", id.linkedin) +
        '<div class="ligne"><span class="cle">CV</span><span class="valeur"><a href="' + proteger(lien_sur(id.cv_pdf)) + '" target="_blank" rel="noopener">Ouvrir mon CV (PDF)</a></span></div></div>' +
        '<p id="message_copie" role="status" style="min-height:1.5em"></p>';
    },

    /* ----- Corbeille (la blague) ----- */
    corbeille: function () {
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
    }
  };

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
    if (!pages[adresse]) {
      zone_pages.hidden = true;
      zone_accueil.hidden = false;
      return;
    }

    var nom = menu.filter(function (ligne) { return ligne[0] === adresse; })[0][1];
    zone_accueil.hidden = true;
    zone_pages.hidden = false;
    nom_page.textContent = projet ? "Réalisations · " + projet.titre : nom;
    afficher_menu(adresse);
    zone_texte.innerHTML = projet ? page_projet(projet) : pages[adresse]();

    /* bouton "Tout afficher" du filtre */
    var tout_afficher = trouver("tout_afficher");
    if (tout_afficher) { tout_afficher.onclick = function () { outil_choisi = null; afficher(); }; }

    /* logos des outils (Compétences) et des organismes (Parcours) */
    zone_texte.querySelectorAll(".logo[data-logos]").forEach(function (boite) {
      charger_logos(boite, boite.getAttribute("data-logos").split("|"));
    });

    /* clic sur un outil : on ouvre les réalisations filtrées */
    zone_texte.querySelectorAll(".pastille[data-outil]").forEach(function (bouton) {
      bouton.addEventListener("click", function () {
        outil_choisi = bouton.getAttribute("data-outil");
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

  /* ---------- 5. BOUTON ACCESSIBILITÉ ---------- */
  var acces_bouton = trouver("acces_bouton");
  var acces_panneau = trouver("acces_panneau");
  var racine = document.documentElement;      /* la balise <html> */

  /* ouvrir / fermer le panneau */
  acces_bouton.addEventListener("click", function () {
    var ouvert = acces_panneau.hidden;
    acces_panneau.hidden = !ouvert;
    acces_bouton.setAttribute("aria-expanded", String(ouvert));
  });
  /* la touche Échap ferme le panneau */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !acces_panneau.hidden) {
      acces_panneau.hidden = true;
      acces_bouton.setAttribute("aria-expanded", "false");
      acces_bouton.focus();
    }
  });

  /* chaque case ajoute ou retire une classe sur <html> (voir style.css) */
  var opt_calme = trouver("opt_calme");
  var opt_contraste = trouver("opt_contraste");
  var opt_grand = trouver("opt_grand");

  /* si l'ordinateur demande déjà moins d'animations, la case est cochée d'office */
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      opt_calme.checked = true;
      racine.classList.add("calme");
    }
  } catch (erreur) { /* pas grave */ }

  opt_calme.addEventListener("change", function () { racine.classList.toggle("calme", opt_calme.checked); });
  opt_contraste.addEventListener("change", function () { racine.classList.toggle("contraste", opt_contraste.checked); });
  opt_grand.addEventListener("change", function () { racine.classList.toggle("grand", opt_grand.checked); });

  /* ---------- 6. BOUTON "REMONTER EN HAUT" ---------- */
  var bouton_haut = trouver("bouton_haut");

  /* le bouton n'apparaît que si on a défilé d'au moins 300px */
  function maj_bouton_haut() {
    bouton_haut.hidden = window.scrollY < 300;
  }
  window.addEventListener("scroll", maj_bouton_haut, { passive: true });

  bouton_haut.addEventListener("click", function () {
    /* défilement doux, sauf si j'ai demandé moins d'animations */
    var doux = !racine.classList.contains("calme");
    window.scrollTo({ top: 0, behavior: doux ? "smooth" : "auto" });
    /* le focus revient en haut : utile au clavier */
    trouver("contenu").focus({ preventScroll: true });
  });

  /* ---------- 7. DÉMARRAGE ---------- */
  afficher();
  maj_bouton_haut();
})();