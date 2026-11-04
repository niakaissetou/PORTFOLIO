window.donnees = window.donnees || {};

/* ----- page Corbeille (ma petite blague) ----- */
window.donnees.corbeille = {
  intro: "Fichiers supprimés. Rien d'important, vraiment.",
  elements: [
    { type: "TXT", nom: "mots_de_passe_admin.txt", meta: "1 Ko · supprimé hier",
      blague: {
        titre: "Raté !",
        image: "",                       /* pas d'image : la blague, c'est le lien ci-dessous */
        texte: "Un vrai mot de passe ne se range jamais dans un fichier texte. Et un lien ou un fichier trop tentant peut cacher un piège : c'est pour cela qu'on sensibilise les utilisateurs au phishing.",
        lien: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        lien_texte: "Voir la vidéo préventive"
      } }
  ]
};
