window.donnees = window.donnees || {};

window.donnees.veille = {
  question: "Comment une entreprise peut-elle protéger ses données contre les ransomwares et les récupérer après une attaque ?",

  /* 0. rappel : qu'est-ce qu'une veille technologique ? */
  definition: "Une veille technologique consiste à surveiller de façon régulière et organisée les nouveautés d'un domaine (menaces, outils, normes, solutions), à trier l'information, à la résumer avec ses propres mots et à en tirer des conclusions utiles. Ce n'est pas un mémoire qui explique un sujet de façon complète : c'est une démarche suivie dans le temps, avec des sources fiables, des dates et un avis personnel.",

  /* 1. mon dispositif de veille*/
  mots_cles: ["ransomware", "rançongiciel", "double extorsion", "sauvegarde immuable", "ANSSI", "CERT-FR"],
  frequence: "1 fois toutes les 2 semaines",
  debut: "novembre 2026",                        /* ex : "septembre 2026" */
  outils: [
    { nom: "Inoreader (CERT-FR, LeMagIT, Infosecurity,...)", usage: "est un flux RSS (fichier publié par un site qui rassemble ses dernières actualités, avec leurs titres, résumés et liens, pour les suivre dans un lecteur RSS sans visiter chaque site)" },
    { nom: "Google Alerts", usage: "Alertes par e-mail en français et en anglais (service gratuit qui envoie par e-mail des notifications lorsqu’un mot-clé ou une expression que l'on a choisis apparaît sur le Web)." },
    { nom : "Youtube", usage: "Des vidéos sur les rançongiciels (le monde, cnn, Micode,...)."}
  ],
  alertes: [
    "rançongiciel OR ransomware France",
    "\"attaque par rançongiciel\" (mairie OR hôpital OR entreprise OR PME)",
    "ANSSI rançongiciel",
    "\"CERT-FR\" rançongiciel",
    "ransomware \"double extorsion\"",
    "ransomware sauvegarde (immuable OR \"3-2-1\" OR restauration)",
    "ransomware ESXi OR VMware",
  ],

  /* 2. mes veilles, la plus récente en premier.
     Pour ajouter une veille : je copie tout le bloc { numero ... synthese: {...} } et je le colle au-dessus.
     date : "AAAA-MM-JJ". Chaque veille a ses articles (un court résumé chacun) et UNE synthèse à la fin. */
  veilles: [
    { numero: 1,
      date: "2026-11-07",
      fiches: [
        { exemple: false,
          date_collecte: "2026-11-07", date_article: "2026-03-11",
          source: "ANSSI (cyber.gouv.fr)", fiabilite: "Source officielle (agence nationale de cybersécurité)",
          titre: "Panorama de la cybermenace 2025 : La France toujours sous la pression des cyber attaquants",
          url: "https://cyber.gouv.fr/actualites/panorama-de-la-cybermenace-2025/",
          resume: "Bilan annuel de l'ANSSI : 3 586 événements de sécurité traités en 2025 (−18 % par rapport à 2024, année des Jeux olympiques). Les secteurs les plus visés sont l'éducation et la recherche (34 %), les ministères et collectivités (24 %), la santé (10 %) et les télécoms (9 %). La cybercriminalité progresse, mais seulement 42 % des 460 fuites de données signalées sont avérées. Les équipements de bordure (pare-feu, VPN) restent des cibles privilégiées, d'où l'importance de la gestion des vulnérabilités.", },
        { exemple: false,
          date_collecte: "2026-11-07", date_article: "2026-03-11",
          source: "Infosecurity Magazine", fiabilite: "Presse spécialisée reconnue, qui reprend les données de l'ANSSI",
          titre: "France: National Cybersecurity Agency Reports Ransomware Attack Drop in 2025",
          url: "https://www.infosecurity-magazine.com/news/france-anssi-ransomware-attack/",
          resume: "D'après l'ANSSI, 128 attaques par rançongiciel ont été recensées en France en 2025, contre 141 en 2024. Les PME restent les premières victimes, mais la santé et l'éducation progressent le plus. Les groupes les plus présents sont Qilin (21 %), Akira (9 %) et LockBit (5 %). L'ANSSI explique la baisse en partie par les opérations de police comme Endgame et par la prévention des défenseurs, mais précise que la menace reste importante.", },
        { exemple: false,
          date_collecte: "2026-11-07", date_article: "2026-10-21",
          source: "Infosecurity Magazine (d'après l'avis conjoint CISA/FBI AA26-293A)", fiabilite: "Presse spécialisée reconnue, qui reprend un avis officiel des agences américaines, allemande et britannique",
          titre: "SafePay Has Compromised 600 Critical Infrastructure Victims Worldwide, CISA Warns",
          url: "https://www.infosecurity-magazine.com/news/safepay-compromised-critical/",
          resume: "Un avis conjoint de la CISA, du FBI et d'agences allemande et britannique indique que le groupe SafePay a touché au moins 600 organisations depuis août 2024. Il entre par des identifiants exposés, des attaques par force brute, le VPN ou des failles d'équipements en bordure de réseau, puis vole les données avant de chiffrer (double extorsion). Les agences recommandent : corriger les failles connues, MFA sur tous les comptes, sauvegardes hors ligne, chiffrées et immuables, testées régulièrement, et segmentation du réseau.", },
        { exemple: false,
          date_collecte: "2026-11-07", date_article: "2026-06-09",
          source: "Sophos", fiabilite: "Éditeur de sécurité, enquête indépendante (Vanson Bourne) commandée par Sophos, à croiser",
          titre: "L'état des ransomwares 2026",
          url: "https://assets.sophos.com/X24WTUEQ/at/b7c7h9w85346t7kpt8tf4qtk/sophos-state-ransomware-report-2026-fr.pdf",
          resume: "Enquête auprès de 2 158 responsables informatiques de 17 pays, tous victimes d'un ransomware. Les données sont chiffrées dans 56 % des attaques. Les causes principales sont les emails malveillants (26 %) et le phishing (24 %), devant les failles exploitées (18 %). 66 % des victimes chiffrées ont restauré leurs données avec leurs sauvegardes et 48 % ont payé la rançon. Le MFA était activé dans 97 % des attaques par identifiants volés : il ne suffit pas seul.", }
      ],
      synthese: {
        exemple: false,
        appris: "Les sources officielles (ANSSI, CISA/FBI) et les enquêtes convergent : les attaquants entrent surtout par les identifiants volés, le phishing et les équipements exposés (VPN, pare-feu), puis volent les données avant de chiffrer. En France, l'ANSSI note une légère baisse des rançongiciels en 2025 (128 contre 141 en 2024), mais la menace reste importante, surtout pour les PME.",
        reflexion: "Pour se protéger d'un ransomware, une entreprise doit faire attention au phishing, aux équipements de bordure et aux fuites de mots de passe ou d'identifiants, et former ses employés avec des campagnes de prévention. Mais rien n'est parfait et il y aura toujours des failles : il faut aussi se préparer à un scénario catastrophe et anticiper. Les attaquants visent les sauvegardes avant de chiffrer, donc il faut les protéger (hors ligne, chiffrées, immuables) et les tester pour pouvoir récupérer ses données : 66 % des victimes chiffrées ont pu restaurer ainsi. L'authentification multifacteur (MFA, un deuxième élément en plus du mot de passe) aide contre les identifiants volés, mais elle ne suffit pas seule : elle était activée dans 97 % des attaques par identifiants volés. Je retiens que les PME sont les premières victimes en France, et qu'il faut vérifier les chiffres : seules 42 % des fuites signalées étaient avérées.",
        surveiller: [
          "Les attaques visant les sauvegardes, les VPN et les équipements en bordure de réseau",
          "Les conséquences financières et humaines des rançongiciels pour les organisations",
          "Comment une PME peut se protéger avec peu de moyens",
          "Les groupes les plus actifs : Qilin, Akira, SafePay",
          "Le prochain panorama de l'ANSSI, pour comparer avec 2025"
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