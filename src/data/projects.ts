import type { Project } from '../types/Project'

export const projects: Project[] = [
    
    {
      id: "tp-vlan-dhcp",
      title: "TP VLAN, DHCP et routeur",
      summary: "Séparer les services INFO et VENTE avec des VLAN, et faire attribuer à chacun ses propres adresses IP par un seul serveur DHCP.",
      context: "Une entreprise souhaite améliorer la bande passante de son réseau et assurer un certain niveau de qualité de service et de sécurité entre ses services INFO et VENTE. Le commutateur des services est relié à un routeur, lui-même relié au serveur DHCP. Le TP est réalisé sur Cisco Packet Tracer.",
      need: "Isoler les services INFO et VENTE sur un même commutateur, tout en gardant un seul serveur DHCP qui attribue automatiquement à chaque service des adresses de son propre réseau.",
      objectives: [
        "Séparer les services INFO et VENTE dans deux VLAN distincts",
        "Attribuer à chaque service une adresse IP dynamique qui lui est propre, depuis un seul serveur DHCP",
        "Faire passer plusieurs VLAN vers le routeur sur un seul câble",
        "Réduire les diffusions et améliorer la sécurité entre les services"
      ],
      environment: [
        "Cisco Packet Tracer",
        "Switch Cisco 2960",
        "Routeur Cisco 2811",
        "Serveur DHCP",
        "4 postes clients",
        "Norme 802.1Q"
      ],
      steps: [
        "DHCP simple : relier les 4 PC et le serveur au switch, configurer l'étendue et vérifier avec ipconfig /renew",
        "DHCP + routeur : placer le routeur entre le switch et le serveur, puis configurer l'agent relais (ip helper-address)",
        "DHCP + VLAN sans routeur : créer le VLAN 2 INFO et constater qu'un serveur seul ne sert qu'un VLAN",
        "DHCP + VLAN + routeur : créer les VLAN 2 INFO et 3 VENTE, passer le port Fa0/1 du switch en trunk 802.1Q et créer une sous-interface par VLAN avec son agent relais",
        "Solution finale : créer une étendue DHCP par VLAN et vérifier l'attribution des adresses (show vlan brief, show interfaces trunk, ipconfig, ping)"
      ],
      difficulties: [
        "Après l'ajout du routeur, les PC n'obtenaient plus d'adresse : le routeur bloque les diffusions, donc la demande DHCP n'arrivait pas au serveur. Solution : un agent relais (ip helper-address) sur l'interface côté PC.",
        "Sans routeur, les PC du VLAN INFO n'obtenaient pas d'adresse, car le serveur ne servait que le VLAN 1. Solution : un routeur avec une sous-interface et un agent relais par VLAN."
      ],
      skills: [
        "Configurer un serveur DHCP et ses étendues",
        "Créer des VLAN et y affecter des ports sur un switch Cisco",
        "Configurer un lien trunk 802.1Q",
        "Configurer des sous-interfaces et un agent relais DHCP sur un routeur Cisco",
        "Établir un plan d'adressage IP",
        "Diagnostiquer avec show vlan brief, show ip interface brief, ipconfig et ping"
      ],
      results: [
        "PC0 et PC1 (VLAN 2 INFO) reçoivent une adresse entre 172.16.0.5 et 172.16.0.15",
        "PC2 et PC3 (VLAN 3 VENTE) reçoivent une adresse entre 172.17.0.5 et 172.17.0.15",
        "Chaque PC joint sa passerelle et le serveur DHCP en ping",
        "Un seul serveur DHCP distribue les adresses de tous les VLAN"
      ],
      documentation: "documentations/TP_DHCP_VLAN_ROUTEUR.pdf",
      proofs: ['documentations/tp-vlan.png']
    },

    {
      id: "m2l-windows-server",
      title: "Maquette M2L : Windows Server 2022 (DHCP, DNS, Active Directory)",
      summary: "Reproduire en virtuel le réseau informatique de la M2L : un serveur Windows Server 2022 qui fournit DHCP, DNS et Active Directory au domaine m2l.local, et un poste client Windows 10.",
      context: "La Maison des Ligues de Lorraine (M2L) héberge des ligues sportives et leur fournit des services réseau (annuaire, DHCP, DNS). Dans le cadre de la mission 3 du PPE, ces services Windows ne pouvant pas être reproduits sur Packet Tracer, la maquette est réalisée en virtualisation sous VMware, sur le VLAN 2 Informatique (172.16.2.0/24).",
      need: "Centraliser la gestion du réseau M2L : attribuer automatiquement les adresses IP, résoudre les noms des machines du domaine m2l.local, et gérer les utilisateurs et les ordinateurs depuis un seul serveur.",
      objectives: [
        "Installer un serveur Windows Server 2022 et un poste client Windows 10 Pro sous VMware",
        "Distribuer automatiquement les adresses du réseau M2L avec un serveur DHCP",
        "Résoudre les noms du domaine m2l.local avec un serveur DNS",
        "Créer le domaine m2l.local avec Active Directory et y joindre le poste client",
        "Donner accès à Internet au réseau interne grâce au routage et au NAT"
      ],
      environment: [
        "VMware Workstation Pro 17",
        "Windows Server 2022",
        "Windows 10 Pro",
        "Active Directory (AD DS)",
        "DHCP",
        "DNS",
        "Routage et accès distant (NAT)"
      ],
      steps: [
        "Création des machines virtuelles : Windows Server 2022 avec deux cartes réseau (NAT et LAN Segment), Windows 10 Pro sur le LAN Segment",
        "Configuration du routage et du NAT sur le serveur pour donner accès à Internet au client",
        "Tests en IP fixe entre le serveur et le client avant d'installer les services",
        "Installation du rôle DHCP : étendue LAN_M2L de 172.16.2.1 à 172.16.2.60, passerelle et DNS 172.16.2.251, domaine m2l.local",
        "Installation du rôle DNS : zones de recherche directe (m2l.local) et inversée (172.16.2), enregistrements A et PTR du serveur",
        "Installation d'AD DS et promotion du serveur en contrôleur du nouveau domaine m2l.local",
        "Passage des zones DNS en « intégrées à Active Directory » et autorisation du serveur DHCP dans l'AD",
        "Jonction du poste client au domaine m2l.local et vérifications"
      ],
      difficulties: [
        "Le client n'accédait pas à Internet : le rôle Routage était installé, mais le NAT n'était pas configuré (aucune carte dans IPv4 → NAT). Solution : reconfigurer le routage en NAT, avec Ethernet0 en interface publique.",
        "Après l'installation de l'AD, le serveur s'affichait « win-srv2022.mshome.net » dans la console DHCP. Cause : l'assistant NAT avait activé ses propres services DNS et DHCP de base et créé le fichier hosts.ics. Solution : supprimer hosts.ics, puis vider le cache DNS (ipconfig /flushdns)."
      ],
      skills: [
        "Créer et configurer des machines virtuelles sous VMware (cartes NAT et LAN Segment)",
        "Installer et configurer un serveur DHCP (étendue, options, liaisons)",
        "Configurer un serveur DNS (zones directe et inversée, enregistrements A et PTR)",
        "Installer Active Directory et promouvoir un contrôleur de domaine",
        "Joindre un poste client à un domaine",
        "Configurer le routage et le NAT sous Windows Server",
        "Diagnostiquer avec ipconfig, ping et nslookup"
      ],
      results: [
        "Le client reçoit automatiquement une adresse entre 172.16.2.1 et 172.16.2.60, avec la passerelle et le DNS 172.16.2.251",
        "nslookup résout WIN-SRV2022.m2l.local en 172.16.2.251, et inversement",
        "WIN-SRV2022 apparaît dans Domain Controllers : il est bien contrôleur du domaine m2l.local",
        "Le client est membre du domaine et accepte la connexion avec un compte du domaine",
        "Le client accède à Internet à travers le NAT du serveur"
      ],
      documentation: "documentations/DOCUMENTATION_WINDOWS_SERVEUR_M2L.pdf"
    },

    {
      id: "bsq",
      title: "BSQ : find the Biggest SQuare (projet en C)",
      summary: "Un programme en C qui trouve et dessine le plus grand carré libre sur une carte remplie d'obstacles, réalisé seule à Epitech.",
      context: "Projet du module \"Elementary Programming in C\" (B-CPE-110) de première année à Epitech, réalisé seule. Le programme est évalué par une moulinette : des tests automatiques très stricts sur l'affichage, les cas d'erreur et le code de retour.",
      need: "Lire une carte passée en argument, vérifier qu'elle est valide, puis afficher en remplaçant par des \"x\" les cases (donc les \".\") du plus grand carré (le plus haut, puis le plus à gauche en cas d'égalité).",
      objectives: [
        "Lire un fichier avec les seuls appels système autorisés (open, read, close, stat)",
        "Vérifier la validité de la carte et gérer les erreurs (message sur la sortie d'erreur, code de retour 84)",
        "Trouver le plus grand carré avec un algorithme rapide, même sur de très grandes cartes",
        "Gérer la mémoire avec malloc et free, sans fuite",
        "Compiler le projet avec un Makefile (règles re, clean et fclean)"
      ],
      environment: [
        "Langage C",
        "Makefile",
        "Linux",
        "Appels système : open, read, write, close, stat",
        "malloc et free"
      ],
      steps: [
        "Lecture du fichier : récupérer sa taille avec stat, allouer la mémoire, puis lire son contenu avec read",
        "Vérification de la carte : première ligne (nombre de lignes), caractères autorisés (\" . \" et \" o \"), lignes de même longueur terminées par un retour à la ligne",
        "Algorithme du \"démineur inversé\" : chaque case vide reçoit 1 + le plus petit nombre parmi ses voisines du haut, de gauche et du coin en haut à gauche ; le plus grand nombre donne la taille et la position du carré",
        "Remplacement des cases du carré par des \" x \" et affichage de la carte avec write",
        "Gestion des erreurs (message sur la sortie d'erreur et code de retour 84) et tests sur des cartes de toutes tailles"
      ],
      difficulties: [
        "L'allocation de la mémoire : réserver la bonne taille pour la carte et pour le tableau de calcul, sans dépassement ni fuite. Solution : Demander de l'aide aux élèves ayant réussis l'allocation de la mémoire",
        "L'algorithme de génération des cartes. Solution : Chercher l'algorithme sur internet."
      ],
      skills: [
        "Programmer en C",
        "Lire un fichier avec les appels système (open, read, stat)",
        "Gérer la mémoire dynamique (malloc, free)",
        "Concevoir un algorithme efficace (programmation dynamique)",
        "Écrire un Makefile",
        "Gérer les erreurs et les codes de retour",
        "Tester un programme face à une moulinette"
      ],
      results: [
        "Le programme affiche le plus grand carré, le plus haut puis le plus à gauche en cas d'égalité",
        "Les cartes invalides sont rejetées avec un message d'erreur et le code de retour 84",
        "Un seul parcours de la carte suffit à trouver le carré, même sur une très grande carte",
        "Plus de 50% des tests réussis à la moulinette."
      ],
      proofs: [
        "documentations/bsq.webp"
      ]
    },
]

