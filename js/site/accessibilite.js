(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var trouver = site.trouver;

  /* ---------- BOUTON ACCESSIBILITÉ ---------- */
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
})();
