/* ============================================================
   data.js : tout mon contenu est ici.
   Je modifie les textes entre guillemets, j'enregistre et je recharge la page.
   Je ne supprime ni les guillemets, ni les virgules, ni les crochets [ ].
   Un champ vide "" affiche « À compléter » sur le site.
   ============================================================ */
window.donnees = {

  /* ----- moi, mon CV et mes contacts ----- */
  identite: {
    nom: "Aïssetou Niakate",
    formation: "BTS SIO · option SISR",
    session: "Épreuve E5 · session 2027",
    sous_titre: "administration systèmes & réseaux",
    photo: "",                           /* vide : ma photo est déjà dans index.html */
    cv_pdf: "doc-img/cv/CV_Aissetou_Niakate.pdf",
    email: "prenom.nom@exemple.fr",
    github: "https://github.com/aissetou-niakate",
    linkedin: "https://www.linkedin.com/in/aissetou-niakate-lin/"
  },

  /* ----- page Parcours (du plus récent au plus ancien dans chaque groupe)
     type : "formation" ou "stage" (le site fait deux groupes)
     logo : chemin du logo de l'organisme (caché s'il n'existe pas)
     description : un texte, OU missions : une liste de phrases */
  parcours: [
    {
      type: "formation",
      titre: "BTS SIO option SISR",
      organisme: "Lycée Charles-de-Foucauld",
      lieu: "Paris",
      periode: "2025 - 2027",
      description: "Administration des systèmes et des réseaux, cybersécurité, services informatiques aux organisations",
      logo: "doc-img/logos/logo-lycee.webp"
    },
    {
      type: "formation",
      titre: "Programme Grande École",
      organisme: "EPITECH",
      lieu: "Kremlin-Bicêtre",
      periode: "2022 - 2024",
      description: "Formation aux technologies de l'information, pédagogie par projets, développement logiciel",
      logo: "doc-img/logos/epitech.webp"
    },
    {
      type: "stage",
      titre: "Stage - Technicienne informatique",
      organisme: "Hôpital Diaconesses Croix Saint-Simon",
      lieu: "Paris",
      periode: "Mai 2026 – Juin 2026",
      missions: [
        "Déploiement d'une dizaine de postes de travail : installation, configuration et mise en service",
        "Support utilisateurs et dépannage matériel en environnement hospitalier",
        "Participation à la gestion du parc informatique avec GLPI"
      ],
      logo: "doc-img/logos/gh.webp"
    },
    {
      type: "stage",
      titre: "Stage - Testeuse d'application",
      organisme: "ShoopCity",
      lieu: "Télé-travail",
      periode: "Octobre 2023 – Décembre 2023",
      missions: [
        "Tests des nouvelles fonctionnalités avant mise en ligne et remontée des anomalies aux développeurs",
        "Propositions d'amélioration de l'expérience utilisateur",
        "Coordination entre les équipes développement et marketing/communication"
      ],
      logo: "doc-img/logos/shoopcity.webp"
    }
  ],

  /* ----- mes outils, rangés par famille (page Compétences) -----
     logos : un ou deux logos (chemins complets). Sans logo, le site affiche le sigle.
     Les noms doivent être IDENTIQUES à ceux écrits dans "outils" de chaque projet. */
  outils: [
    {
      categorie: "Langages & web",
      liste: [
        {
          nom: "C",
          logos: ["doc-img/icons/c-1.svg"],
          sigle: "C"
        },
        {
          nom: "HTML/CSS",
          logos: ["doc-img/icons/html-1.svg", "doc-img/icons/css-3.svg"],
          sigle: "HTML"
        },
        {
          nom: "JavaScript",
          logos: ["doc-img/icons/javascript-1.svg"],
          sigle: "JS"
        },
        {
          nom: "ASM",
          logos: [],
          sigle: "ASM"
        },
        {
          nom: "PHP",
          logos: ["doc-img/icons/php-6.svg"],
          sigle: "PHP"
        },
        {
          nom: "Python",
          logos: ["doc-img/icons/python-5.svg"],
          sigle: "PY"
        }
      ]
    },
    {
      categorie: "Systèmes d'exploitation",
      liste: [
        {
          nom: "Debian",
          logos: ["doc-img/icons/debian-2.svg"],
          sigle: "DEB"
        },
        {
          nom: "Fedora",
          logos: ["doc-img/icons/fedora-1.svg"],
          sigle: "FED"
        },
        {
          nom: "Ubuntu",
          logos: ["doc-img/icons/ubuntu-4.svg"],
          sigle: "UBU"
        },
        {
          nom: "Windows/Windows server",
          logos: [
            "doc-img/icons/microsoft-windows-22.svg",
            "doc-img/icons/windows-server-2.svg"
          ],
          sigle: "WIN"
        }
      ]
    },
    {
      categorie: "Virtualisation & développement",
      liste: [
        {
          nom: "Proxmox",
          logos: ["doc-img/icons/proxmox-2.svg"],
          sigle: "PVE"
        },
        {
          nom: "GitHub",
          logos: ["doc-img/icons/github-icon-1.svg"],
          sigle: "GH"
        },
        {
          nom: "VS Code",
          logos: ["doc-img/icons/visual-studio-code-1.svg"],
          sigle: "VS"
        },
        {
          nom: "VmWare",
          logos: ["doc-img/icons/vmware.svg"],
          sigle: "VM"
        },
        {
          nom: "Packet Tracer",
          logos: ["doc-img/icons/packet-tracer-3.svg"],
          sigle: "PT"
        }
      ]
    },
    {
      categorie: "Gestion de projet & collaboration",
      liste: [
        {
          nom: "Jira",
          logos: ["doc-img/icons/jira-3.svg"],
          sigle: "JIRA"
        },
        {
          nom: "Slack",
          logos: ["doc-img/icons/slack-new-logo.svg"],
          sigle: "SL"
        },
        {
          nom: "Trello",
          logos: ["doc-img/icons/trello.svg"],
          sigle: "TR"
        },
        {
          nom: "Discord",
          logos: ["doc-img/icons/discord-6.svg"],
          sigle: "DC"
        }
      ]
    }
  ],

  /* ----- page Réalisations -----
     Chaque projet a une carte dans la liste, puis sa page de détail.
     id             : un mot court, sans espace ni accent (il sert dans l'adresse : #projet-m2l_windows_server)
     resume         : 1 ou 2 phrases affichées sur la carte
     contexte, besoin : textes
     objectifs, environnement, etapes, difficultes, competences, resultats : listes de phrases
                      ([] = la section n'apparaît pas, sauf étapes et résultats : "À compléter")
     documentation  : chemin du PDF, "" s'il n'y en a pas (la section n'apparaît pas)
     preuves        : chemins des captures d'écran, [] s'il n'y en a pas
     outils         : noms EXACTS de la liste d'outils plus haut (sert au filtre de la page Compétences) */
  projets: [
    {
      id: "tp_vlan_dhcp",
      titre: "TP VLAN, DHCP et routeur",
      resume: "Séparer les services INFO et VENTE avec des VLAN, et faire attribuer à chacun ses propres adresses IP par un seul serveur DHCP.",
      contexte: "Une entreprise souhaite améliorer la bande passante de son réseau et assurer un certain niveau de qualité de service et de sécurité entre ses services INFO et VENTE. Le commutateur des services est relié à un routeur, lui-même relié au serveur DHCP. Le TP est réalisé sur Cisco Packet Tracer.",
      besoin: "Isoler les services INFO et VENTE sur un même commutateur, tout en gardant un seul serveur DHCP qui attribue automatiquement à chaque service des adresses de son propre réseau.",
      objectifs: [
        "Séparer les services INFO et VENTE dans deux VLAN distincts",
        "Attribuer à chaque service une adresse IP dynamique qui lui est propre, depuis un seul serveur DHCP",
        "Faire passer plusieurs VLAN vers le routeur sur un seul câble",
        "Réduire les diffusions et améliorer la sécurité entre les services"
      ],
      environnement: [
        "Cisco Packet Tracer",
        "Switch Cisco 2960",
        "Routeur Cisco 2811",
        "Serveur DHCP",
        "4 postes clients",
        "Norme 802.1Q"
      ],
      etapes: [
        "DHCP simple : relier les 4 PC et le serveur au switch, configurer l'étendue et vérifier avec ipconfig /renew",
        "DHCP + routeur : placer le routeur entre le switch et le serveur, puis configurer l'agent relais (ip helper-address)",
        "DHCP + VLAN sans routeur : créer le VLAN 2 INFO et constater qu'un serveur seul ne sert qu'un VLAN",
        "DHCP + VLAN + routeur : créer les VLAN 2 INFO et 3 VENTE, passer le port Fa0/1 du switch en trunk 802.1Q et créer une sous-interface par VLAN avec son agent relais",
        "Solution finale : créer une étendue DHCP par VLAN et vérifier l'attribution des adresses (show vlan brief, show interfaces trunk, ipconfig, ping)"
      ],
      difficultes: [
        "Après l'ajout du routeur, les PC n'obtenaient plus d'adresse : le routeur bloque les diffusions, donc la demande DHCP n'arrivait pas au serveur. Solution : un agent relais (ip helper-address) sur l'interface côté PC.",
        "Sans routeur, les PC du VLAN INFO n'obtenaient pas d'adresse, car le serveur ne servait que le VLAN 1. Solution : un routeur avec une sous-interface et un agent relais par VLAN."
      ],
      competences: [
        "Configurer un serveur DHCP et ses étendues",
        "Créer des VLAN et y affecter des ports sur un switch Cisco",
        "Configurer un lien trunk 802.1Q",
        "Configurer des sous-interfaces et un agent relais DHCP sur un routeur Cisco",
        "Établir un plan d'adressage IP",
        "Diagnostiquer avec show vlan brief, show ip interface brief, ipconfig et ping"
      ],
      resultats: [
        "PC0 et PC1 (VLAN 2 INFO) reçoivent une adresse entre 172.16.0.5 et 172.16.0.15",
        "PC2 et PC3 (VLAN 3 VENTE) reçoivent une adresse entre 172.17.0.5 et 172.17.0.15",
        "Chaque PC joint sa passerelle et le serveur DHCP en ping",
        "Un seul serveur DHCP distribue les adresses de tous les VLAN"
      ],
      documentation: "doc-img/documentations/TP_DHCP_VLAN_ROUTEUR.pdf",
      preuves: ["doc-img/documentations/tp-vlan.png"],
      outils: ["Packet Tracer"]
    },
    {
      id: "tp_spanning_tree",
      titre: "TP Spanning Tree (STP) sous Packet Tracer",
      resume: "Observer le protocole Spanning Tree sur une maquette de 6 commutateurs : quels liens sont bloqués, comment le réseau se reconfigure après une panne et comment le pont racine est choisi.",
      contexte: "Exolab de découverte du protocole Spanning Tree (STP, norme IEEE 802.1D), réalisé sous Packet Tracer 8.2.2 en BTS SIO 2 (2026-2027). Le réseau comporte 6 commutateurs Cisco 2960 reliés par des liens redondants, 4 PC et un serveur (192.168.1.200, réseau 192.168.1.0/24).",
      besoin: "Comprendre comment STP évite les boucles réseau (tempêtes de diffusion) tout en gardant des liens de secours, et vérifier la tolérance aux pannes du réseau.",
      objectifs: [
        "Identifier les commutateurs traversés par une communication et comprendre pourquoi certains ports sont bloqués",
        "Trouver le pont racine avec la commande show spanning-tree",
        "Observer la reconvergence après la coupure d'un lien, le passage de liens en Gigabit, le changement de priorité et la panne d'un commutateur",
        "Prévoir l'arbre de recouvrement à partir des priorités et des adresses MAC"
      ],
      environnement: [
        "Packet Tracer 8.2.2",
        "6 commutateurs Cisco 2960-24TT",
        "4 PC et 1 serveur",
        "STP (IEEE 802.1D)",
        "Mode simulation (ICMP)",
        "show spanning-tree"
      ],
      etapes: [
        "Observation de la communication : en mode simulation (filtre ICMP), ping de PC1 vers le serveur. La trame traverse SW6, SW4, SW1 et SW5 : SW2 et SW3 sont évités car STP bloque certains ports.",
        "Analyse de la configuration : show spanning-tree sur chaque switch. SW1 est le pont racine (« This bridge is the root ») car, à priorité égale (32768), il a la plus petite adresse MAC (0001.C945.00E5).",
        "Scénario 1, coupure d'un lien : shutdown du port Fa0/20 de SW4 (lien SW1-SW4). Le chemin devient SW6, SW3, SW1, SW5 : le port Fa0/23 de SW6, qui était bloqué, passe en forwarding.",
        "Scénario 2, liens Gigabit : passage de SW2-SW4 et SW1-SW2 en Gigabit. Le chemin SW4, SW2, SW1 coûte 8 contre 19 pour le lien direct : SW4 bloque Fa0/20 et passe par SW2.",
        "Scénario 3, changement de priorité : spanning-tree vlan 1 priority 8192 sur SW2. SW2 devient le pont racine et l'arbre est recalculé.",
        "Scénario 4, panne d'un commutateur : tous les ports de SW2 sont désactivés pendant un ping permanent (ping -t). Quelques secondes de « Request timed out », puis SW1 redevient le pont racine et la communication reprend.",
        "Mise en application : à partir des Bridge ID (priorité + adresse MAC), élection de SW5 comme pont racine (priorité 4096 et adresse 0090.216C.A649, plus petite que celle de SW3), détermination des liens actifs et bloqués, puis vérification avec show spanning-tree."
      ],
      difficultes: [],
      competences: [
        "Lire et interpréter la sortie de la commande show spanning-tree",
        "Identifier le pont racine, les ports racine, désignés et bloqués",
        "Calculer les coûts des liens (10 Mbit/s : 100, 100 Mbit/s : 19, 1 Gbit/s : 4)",
        "Modifier la priorité d'un commutateur Cisco (spanning-tree vlan 1 priority)",
        "Suivre le trajet des trames avec le mode simulation de Packet Tracer",
        "Prévoir la reconvergence après une coupure de lien ou une panne de commutateur"
      ],
      resultats: [
        "STP permet d'avoir des liens de secours sans créer de boucle : il élit un pont racine (plus petite priorité, puis plus petite adresse MAC) et bloque les liens redondants",
        "Après une coupure de lien ou une panne de switch, STP recalcule l'arbre tout seul et les liens bloqués prennent le relais",
        "La reconvergence prend 30 à 50 secondes avec STP : c'est pour cela qu'on utilise plutôt RSTP (802.1w, environ 6 s) en entreprise",
        "Mise en application : le pont racine est SW5 et le chemin entre PC1 et le serveur est SW6, SW3, SW1, SW5"
      ],
      documentation: "doc-img/documentations/EXOLAB_SPANNING_TREE_AN.pdf",
      preuves: [
        "doc-img/documentations/stp-topologie.png",
        "doc-img/documentations/stp-simulation.png",
        "doc-img/documentations/stp-verification-sw5.png",
        "doc-img/documentations/stp-arbre-final.png"
      ],
      outils: ["Packet Tracer"]
    },
    {
      id: "m2l_windows_server",
      titre: "Maquette M2L : Windows Server 2022 (DHCP, DNS, Active Directory)",
      resume: "Reproduire en virtuel le réseau informatique de la M2L : un serveur Windows Server 2022 qui fournit DHCP, DNS et Active Directory au domaine m2l.local, et un poste client Windows 10.",
      contexte: "La Maison des Ligues de Lorraine (M2L) héberge des ligues sportives et leur fournit des services réseau (annuaire, DHCP, DNS). Dans le cadre de la mission 3 du PPE, ces services Windows ne pouvant pas être reproduits sur Packet Tracer, la maquette est réalisée en virtualisation sous VMware, sur le VLAN 2 Informatique (172.16.2.0/24).",
      besoin: "Centraliser la gestion du réseau M2L : attribuer automatiquement les adresses IP, résoudre les noms des machines du domaine m2l.local, et gérer les utilisateurs et les ordinateurs depuis un seul serveur.",
      objectifs: [
        "Installer un serveur Windows Server 2022 et un poste client Windows 10 Pro sous VMware",
        "Distribuer automatiquement les adresses du réseau M2L avec un serveur DHCP",
        "Résoudre les noms du domaine m2l.local avec un serveur DNS",
        "Créer le domaine m2l.local avec Active Directory et y joindre le poste client",
        "Donner accès à Internet au réseau interne grâce au routage et au NAT"
      ],
      environnement: [
        "VMware Workstation Pro 17",
        "Windows Server 2022",
        "Windows 10 Pro",
        "Active Directory (AD DS)",
        "DHCP",
        "DNS",
        "Routage et accès distant (NAT)"
      ],
      etapes: [
        "Création des machines virtuelles : Windows Server 2022 avec deux cartes réseau (NAT et LAN Segment), Windows 10 Pro sur le LAN Segment",
        "Configuration du routage et du NAT sur le serveur pour donner accès à Internet au client",
        "Tests en IP fixe entre le serveur et le client avant d'installer les services",
        "Installation du rôle DHCP : étendue LAN_M2L de 172.16.2.1 à 172.16.2.60, passerelle et DNS 172.16.2.251, domaine m2l.local",
        "Installation du rôle DNS : zones de recherche directe (m2l.local) et inversée (172.16.2), enregistrements A et PTR du serveur",
        "Installation d'AD DS et promotion du serveur en contrôleur du nouveau domaine m2l.local",
        "Passage des zones DNS en « intégrées à Active Directory » et autorisation du serveur DHCP dans l'AD",
        "Jonction du poste client au domaine m2l.local et vérifications"
      ],
      difficultes: [
        "Le client n'accédait pas à Internet : le rôle Routage était installé, mais le NAT n'était pas configuré (aucune carte dans IPv4 → NAT). Solution : reconfigurer le routage en NAT, avec Ethernet0 en interface publique.",
        "Après l'installation de l'AD, le serveur s'affichait « win-srv2022.mshome.net » dans la console DHCP. Cause : l'assistant NAT avait activé ses propres services DNS et DHCP de base et créé le fichier hosts.ics. Solution : supprimer hosts.ics, puis vider le cache DNS (ipconfig /flushdns)."
      ],
      competences: [
        "Créer et configurer des machines virtuelles sous VMware (cartes NAT et LAN Segment)",
        "Installer et configurer un serveur DHCP (étendue, options, liaisons)",
        "Configurer un serveur DNS (zones directe et inversée, enregistrements A et PTR)",
        "Installer Active Directory et promouvoir un contrôleur de domaine",
        "Joindre un poste client à un domaine",
        "Configurer le routage et le NAT sous Windows Server",
        "Diagnostiquer avec ipconfig, ping et nslookup"
      ],
      resultats: [
        "Le client reçoit automatiquement une adresse entre 172.16.2.1 et 172.16.2.60, avec la passerelle et le DNS 172.16.2.251",
        "nslookup résout WIN-SRV2022.m2l.local en 172.16.2.251, et inversement",
        "WIN-SRV2022 apparaît dans Domain Controllers : il est bien contrôleur du domaine m2l.local",
        "Le client est membre du domaine et accepte la connexion avec un compte du domaine",
        "Le client accède à Internet à travers le NAT du serveur"
      ],
      documentation: "doc-img/documentations/DOCUMENTATION_WINDOWS_SERVEUR_M2L.pdf",
      preuves: [],
      outils: ["Windows/Windows server", "VmWare"]
    },
    {
      id: "bsq",
      titre: "BSQ : find the Biggest SQuare (projet en C)",
      resume: "Un programme en C qui trouve et dessine le plus grand carré libre sur une carte remplie d'obstacles, réalisé seule à Epitech.",
      contexte: "Projet du module \"Elementary Programming in C\" (B-CPE-110) de première année à Epitech, réalisé seule. Le programme est évalué par une moulinette : des tests automatiques très stricts sur l'affichage, les cas d'erreur et le code de retour.",
      besoin: "Lire une carte passée en argument, vérifier qu'elle est valide, puis afficher en remplaçant par des \"x\" les cases (donc les \".\") du plus grand carré (le plus haut, puis le plus à gauche en cas d'égalité).",
      objectifs: [
        "Lire un fichier avec les seuls appels système autorisés (open, read, close, stat)",
        "Vérifier la validité de la carte et gérer les erreurs (message sur la sortie d'erreur, code de retour 84)",
        "Trouver le plus grand carré avec un algorithme rapide, même sur de très grandes cartes",
        "Gérer la mémoire avec malloc et free, sans fuite",
        "Compiler le projet avec un Makefile (règles re, clean et fclean)"
      ],
      environnement: [
        "Langage C",
        "Makefile",
        "Linux",
        "Appels système : open, read, write, close, stat",
        "malloc et free"
      ],
      etapes: [
        "Lecture du fichier : récupérer sa taille avec stat, allouer la mémoire, puis lire son contenu avec read",
        "Vérification de la carte : première ligne (nombre de lignes), caractères autorisés (\" . \" et \" o \"), lignes de même longueur terminées par un retour à la ligne",
        "Algorithme du \"démineur inversé\" : chaque case vide reçoit 1 + le plus petit nombre parmi ses voisines du haut, de gauche et du coin en haut à gauche ; le plus grand nombre donne la taille et la position du carré",
        "Remplacement des cases du carré par des \" x \" et affichage de la carte avec write",
        "Gestion des erreurs (message sur la sortie d'erreur et code de retour 84) et tests sur des cartes de toutes tailles"
      ],
      difficultes: [
        "L'allocation de la mémoire : réserver la bonne taille pour la carte et pour le tableau de calcul, sans dépassement ni fuite. Solution : Demander de l'aide aux élèves ayant réussis l'allocation de la mémoire",
        "L'algorithme de génération des cartes. Solution : Chercher l'algorithme sur internet."
      ],
      competences: [
        "Programmer en C",
        "Lire un fichier avec les appels système (open, read, stat)",
        "Gérer la mémoire dynamique (malloc, free)",
        "Concevoir un algorithme efficace (programmation dynamique)",
        "Écrire un Makefile",
        "Gérer les erreurs et les codes de retour",
        "Tester un programme face à une moulinette"
      ],
      resultats: [
        "Le programme affiche le plus grand carré, le plus haut puis le plus à gauche en cas d'égalité",
        "Les cartes invalides sont rejetées avec un message d'erreur et le code de retour 84",
        "Un seul parcours de la carte suffit à trouver le carré, même sur une très grande carte",
        "Plus de 50% des tests réussis à la moulinette."
      ],
      documentation: "",
      preuves: ["doc-img/documentations/bsq.webp"],
      outils: ["C"]
    }
  ],

  /* ----- page Tableau de synthèse (le PDF officiel de l'épreuve)
     apercu : image du tableau (sans extension : le site cherche .png, .webp, .jpg...) */
  synthese: {
    titre: "Tableau de synthèse des réalisations professionnelles",
    sous_titre: "BTS SIO option SISR · document PDF",
    texte: "Le document officiel de l'épreuve : toutes mes réalisations professionnelles et les compétences qu'elles mobilisent.",
    apercu: "doc-img/documentations/tableau-de-synthese",
    pdf: "doc-img/documentations/tableau-de-synthese.pdf"
  },

  /* ----- page Veille -----
     Une veille = une définition, un dispositif (comment je surveille), des séances de veille
     (chacune avec ses fiches et sa synthèse), puis ma conclusion générale.
     Tout champ vide "" affiche « À compléter » sur le site : je n'ai qu'à écrire entre les guillemets.
     Ce qui est marqué exemple: true affiche « Exemple à remplacer » : je remplace le texte
     puis je mets exemple: false. */
  veille: {
    question: "Les sites de streaming illégaux sont-ils un risque pour la sécurité d'un réseau, et comment le filtrer ?",

    /* 0. rappel : qu'est-ce qu'une veille technologique ? */
    definition: "Une veille technologique consiste à surveiller de façon régulière et organisée les nouveautés d'un domaine (menaces, outils, normes, solutions), à trier l'information, à la résumer avec ses propres mots et à en tirer des conclusions utiles. Ce n'est pas un mémoire qui explique un sujet de façon complète : c'est une démarche suivie dans le temps, avec des sources fiables, des dates et un avis personnel.",

    /* 1. mon dispositif */
    mots_cles: ["malvertising", "streaming illégal", "sites miroirs", "Arcom", "filtrage DNS", "faux lecteur vidéo"],
    frequence: "2 à 3 fois par semaine",
    debut: "",                        /* ex : "septembre 2026" */
    outils: [
      { nom: "Inoreader", usage: "Flux RSS rangés en dossiers (officiel, presse spécialisée, éditeurs de sécurité, piratage, vidéo). Recherche enregistrée sur mes mots-clés." },
      { nom: "Google Alerts", usage: "Alertes par e-mail en français et en anglais (ex : malvertising streaming, \"filtrage DNS\" entreprise, Pi-hole)." }
    ],
    /* fiabilite : officielle / bonne / moyenne / variable. pourquoi : pourquoi je garde cette source */
    sources: [
      { type: "Officiel", noms: "Cybermalveillance.gouv.fr, CERT-FR, ANSSI, Arcom", fiabilite: "Très élevée", pourquoi: "" },
      { type: "Presse spécialisée", noms: "LeMagIT, Numerama, Next, Korben, ZATAZ", fiabilite: "Bonne", pourquoi: "" },
      { type: "Éditeurs de sécurité", noms: "Malwarebytes Labs, ESET WeLiveSecurity, Securelist, Sophos News", fiabilite: "Bonne, mais ils vendent aussi leurs produits", pourquoi: "" },
      { type: "Piratage / streaming", noms: "TorrentFreak", fiabilite: "Moyenne, à croiser avec d'autres sources", pourquoi: "" },
      { type: "Vidéo", noms: "", fiabilite: "Variable, pour comprendre", pourquoi: "" }
    ],
    alertes: [
      "malvertising streaming",
      "\"streaming illégal\" sécurité OR malware OR virus",
      "Arcom blocage sites streaming",
      "\"sites miroirs\" piratage",
      "\"faux lecteur vidéo\" OR \"fausse mise à jour\" malware",
      "\"filtrage DNS\" entreprise",
      "Pi-hole"
    ],

    /* 2. mes veilles, la plus récente en premier.
       Pour ajouter une veille : je copie tout le bloc { numero ... synthese: {...} } et je le colle au-dessus.
       date : "AAAA-MM-JJ". Chaque veille a ses fiches (mes lectures) et sa synthèse. */
    veilles: [
      { numero: 1,
        date: "2026-11-03",
        fiches: [
          { exemple: true,
            date_collecte: "2026-11-03", date_article: "2026-11-01",
            source: "Nom du site", fiabilite: "Presse spécialisée",
            titre: "Titre de l'article", url: "",
            resume: "Résumé en 3 à 4 lignes, avec mes mots : de quoi parle l'article, quelle campagne ou quelle solution est décrite.",
            change: "Un nouveau risque ? Une nouvelle protection ? Ce que cet article change pour ma problématique.",
            avis: "Bloquer un domaine ne sert à rien si le site change d'adresse chaque semaine. Le filtrage par catégories me semble plus efficace." },
          { exemple: true,
            date_collecte: "2026-10-30", date_article: "2026-10-28",
            source: "Nom du site", fiabilite: "Éditeur de sécurité",
            titre: "Titre de l'article", url: "",
            resume: "Résumé en 3 à 4 lignes, avec mes mots.",
            change: "Ce que cet article change pour ma problématique.",
            avis: "J'ai testé le blocage sur mon DNS et il marche, mais un utilisateur motivé le contourne avec un VPN. Il faut donc aussi sensibiliser." },
          /* autre exemple d'avis : « Cet article accuse les utilisateurs, mais il ne parle pas du fait que l'offre légale est éclatée entre trop de plateformes. »
             Un avis = une phrase qui prend position et la justifie : d'accord ou non, ce qui me surprend, ce qui me paraît insuffisant. */
          { exemple: false,
            date_collecte: "", date_article: "", source: "", fiabilite: "", titre: "", url: "",
            resume: "", change: "", avis: "" }
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
  },

  /* ----- page Corbeille (ma petite blague) ----- */
  corbeille: {
    intro: "Fichiers supprimés. Rien d'important, vraiment.",
    elements: [
      { type: "TXT", nom: "mots_de_passe_admin.txt", meta: "1 Ko · supprimé hier",
        blague: {
          titre: "Raté !",
          image: "images/rickroll",
          texte: "Un vrai mot de passe ne se range jamais dans un fichier texte. Et un lien ou un fichier trop tentant peut cacher un piège : c'est pour cela qu'on sensibilise les utilisateurs au phishing.",
          lien: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          lien_texte: "Voir la vidéo"
        } }
    ]
  }
};