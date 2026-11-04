window.donnees = window.donnees || {};

window.donnees.veille = {
  question: "Les sites de streaming illégaux sont-ils un risque pour la sécurité d'un réseau, et comment le filtrer ?",

  /* 0. rappel : qu'est-ce qu'une veille technologique ? */
  definition: "Une veille technologique consiste à surveiller de façon régulière et organisée les nouveautés d'un domaine (menaces, outils, normes, solutions), à trier l'information, à la résumer avec ses propres mots et à en tirer des conclusions utiles. Ce n'est pas un mémoire qui explique un sujet de façon complète : c'est une démarche suivie dans le temps, avec des sources fiables, des dates et un avis personnel.",

  /* 1. mon dispositif de veille*/
  mots_cles: ["malvertising", "streaming illégal", "sites miroirs", "Arcom", "filtrage DNS", "faux lecteur vidéo"],
  frequence: "1 fois toutes les 2 semaines",
  debut: "",                        /* ex : "septembre 2026" */
  outils: [
    { nom: "Inoreader", usage: "est un flux RSS (fichier standardisé qui diffuse automatiquement les nouveautés d’un site (titres, résumés et liens), afin de les suivre dans un lecteur RSS sans visiter chaque site)." },
    { nom: "Google Alerts", usage: "Alertes par e-mail en français et en anglais (service gratuit qui envoie par e-mail des notifications lorsqu’un mot-clé ou une expression que l'on a choisis apparaît sur le Web)." }
  ],
  alertes: [
    "malvertising streaming",
    "\"streaming illégal\" sécurité OR malware OR virus",
    "Arcom blocage sites streaming",
    "\"sites miroirs\" piratage",
    "\"faux lecteur vidéo\" OR \"fausse mise à jour\" malware",
    "\"filtrage DNS\" entreprise",
  ],

  /* 2. mes veilles, la plus récente en premier.
     Pour ajouter une veille : je copie tout le bloc { numero ... synthese: {...} } et je le colle au-dessus.
     date : "AAAA-MM-JJ". Chaque veille a ses articles (un court résumé chacun) et UNE synthèse à la fin. */
  veilles: [
    { numero: 1,
      date: "2026-11-07",
      fiches: [
        { exemple: false,
          date_collecte: "2026-11-03", date_article: "2026-06-29",
          source: "Tech Times", fiabilite: "Presse généraliste, à croiser",
          titre: "Illegal World Cup Streaming Sites Seized: DOJ's 400-Domain Crackdown Exposed Malware Risk",
          url: "https://www.techtimes.com/articles/319341/20260629/illegal-world-cup-streaming-sites-seized-dojs-400-domain-crackdown-exposed-malware-risk.htm",
          resume: "Le ministère américain de la Justice a saisi environ 400 domaines qui diffusaient la Coupe du monde 2026. Ces sites gagnent de l'argent avec des publicités malveillantes : infection sans rien télécharger, faux boutons de son, fausses fenêtres de connexion qui volent les identifiants.", },
        { exemple: false,
          date_collecte: "2026-11-03", date_article: "2026-05-29",
          source: "Cyber Security News (d'après Securelist)", fiabilite: "Presse spécialisée, à croiser",
          titre: "Hackers Use Fake Video Player Updates to Deploy Miner and RAT Malware",
          url: "https://cybersecuritynews.com/hackers-use-fake-video-player-updates/",
          resume: "Sur des sites de streaming pirates, un faux message dit que le lecteur vidéo est obsolète. La « mise à jour » installe un mineur de cryptomonnaie et un accès à distance (RAT), qui communique avec les attaquants par le DNS.", },
        { exemple: false,
          date_collecte: "2026-11-03", date_article: "2026-08-11",
          source: "TorrentFreak", fiabilite: "Moyenne, à croiser avec d'autres sources",
          titre: "Paris Court Kicks Off New Football Season with Multi-Intermediary Piracy Blocking Orders",
          url: "https://torrentfreak.com/paris-court-kicks-off-new-football-season-with-multi-intermediary-piracy-blocking-orders/",
          resume: "Le tribunal de Paris ordonne à Orange, SFR, Free et Bouygues de bloquer des sites pirates de football jusqu'en 2027. Google Public DNS, Cloudflare, des VPN et les moteurs de recherche sont aussi visés. De nouveaux domaines peuvent être ajoutés en cours de saison.", },
        { exemple: false,
          date_collecte: "2026-11-03", date_article: "2026-07-30",
          source: "Phonandroid", fiabilite: "Presse spécialisée",
          titre: "La France valide le blocage automatisé et en temps réel des IPTV et sites de streaming pirates",
          url: "https://www.phonandroid.com/la-france-valide-le-blocage-automatise-et-en-temps-reel-des-iptv-et-sites-de-streaming-pirates.html",
          resume: "La loi sur le sport permet de bloquer automatiquement des flux pirates en direct, sans juge au préalable. L'Arcom supervise le système, et les fournisseurs d'accès, résolveurs DNS et VPN doivent couper l'accès immédiatement.", }
      ],
      synthese: {
        exemple: false,
        appris: "Les sites de streaming illégaux sont dangereux surtout à cause de leurs publicités et de leurs faux boutons (faux lecteur vidéo, malvertising, phishing). Le blocage ne concerne plus seulement les fournisseurs d'accès : les DNS publics et les VPN sont aussi visés.",
        reflexion: "Oui, ces sites sont un risque pour un réseau, et le filtrage DNS est une bonne première barrière, mais elle ne suffit pas : les sites changent d'adresse et un malware déjà sur le poste n'est pas arrêté. Je retiens qu'il faut combiner filtrage, antivirus, droits limités et sensibilisation.",
        surveiller: [
          "Le blocage automatisé de l'Arcom et ses erreurs éventuelles",
          "Préparer ma démonstration de blocage DNS (Pi-hole ou Quad9)"
        ]
      }
    },
    { numero: 2,
      date: "2026-11-21",
      fiches: [
        { exemple: true,
          date_collecte: "2026-11-03", date_article: "2026-11-01",
          source: "Nom du site", fiabilite: "Presse spécialisée",
          titre: "Titre de l'article", url: "",
          resume: "Résumé en 3 à 4 lignes, avec mes mots : de quoi parle l'article, quelle campagne ou quelle solution est décrite.", },
        { exemple: true,
          date_collecte: "2026-10-30", date_article: "2026-10-28",
          source: "Nom du site", fiabilite: "Éditeur de sécurité",
          titre: "Titre de l'article", url: "",
          resume: "Résumé en 3 à 4 lignes, avec mes mots.", },
        { exemple: false,
          date_collecte: "", date_article: "", source: "", fiabilite: "", titre: "", url: "",
          resume: "", }
      ],
      /* synthèse de cette veille :
         appris     : ce que j'ai appris pendant cette veille
         reflexion  : ma réflexion et ce que je retiens
         surveiller : une liste de ce que je surveillerai ensuite */
      synthese: {
        exemple: true,
        appris: "Ce que j'ai découvert pendant cette veille : une campagne, une technique, un outil ou un chiffre qui m'a marquée.",
        reflexion: "Ce que j'en pense et le point essentiel que je retiens pour répondre à ma problématique.",
        surveiller: ["Un point précis à suivre dans les prochains jours", "Une solution ou une source à vérifier"]
      }
    }
  ],

  /* 3. ma conclusion de toutes les veilles : je réponds à ma question avec mes mots.
     Pour faire plusieurs paragraphes, j'écris \n entre deux paragraphes. */
  conclusion: ""
};
