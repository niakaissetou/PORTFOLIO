(function () {
  "use strict";

  var site = window.site;                /* les outils partagés (voir fonctions.js) */
  var trouver = site.trouver;

  /* ---------- BOUTON "REMONTER EN HAUT" ---------- */
  var racine = document.documentElement;      /* la balise <html> */
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

  site.maj_bouton_haut = maj_bouton_haut;
})();
