import type { Article } from '../types/Articles.ts'

export const articles: Article[] = [

  // Veille du 5 octobre 2026
  {
    id: "article1",
    title: "VPN vs. SSL VPN: What’s the Difference & What Actually Matters?",
    source: "Windscribe",
    date: "2026-10-05",
    url: "https://windscribe.com/blog/vpn-vs-ssl-vpn/",
    summary: "L’article compare les deux familles de VPN les plus utilisées en entreprise depuis longtemps. Les VPN basés sur TLS, comme OpenVPN, passent facilement les pare-feu car ils utilisent le port 443, comme les sites web. IPsec protège directement les paquets IP : c’est un standard très répandu, mais plus facile à bloquer.",
    veille: "2026-10-05"
  },
  {
    id: "article2",
    title: "WireGuard vs OpenVPN vs IKEv2 (2026): Pick, Configure & Test the Right VPN Protocol",
    source: "Dig Trace",
    date: "2026-09-27",
    url: "https://digtrace.net/blog/wireguard-vs-openvpn-vs-ikev2",
    summary: "WireGuard est un protocole VPN récent qui relie deux appareils grâce à une paire de clés. L’article le compare à OpenVPN et IPsec : WireGuard est le plus simple et le plus rapide, mais il fonctionne uniquement en UDP et peut être bloqué par certains pare-feu, là où OpenVPN sur le port 443 passe. Pour gérer les utilisateurs d’une équipe, OpenVPN reste plus pratique.",
    veille: "2026-10-05"
  },
  {
    id: "article3",
    title: "strongSwan 6.1.0 Released",
    source: "strongSwan",
    date: "2026-09-07",
    url: "https://www.strongswan.org/blog/2026/09/07/strongswan-6.1.0-released.html",
    summary: "strongSwan, un logiciel open source qui permet de créer des VPN IPsec, corrige onze failles. L’une d’elles pouvait permettre à un attaquant de prendre le contrôle du serveur VPN à distance, une autre d’ouvrir un tunnel avant d’avoir prouvé son identité, et donc d’entrer dans le réseau sans être authentifié.",
    veille: "2026-10-05"
  },

  // Veille du 19 octobre 2026
  {
    id: "article10",
    title: "NetBird vs. Tailscale vs. WireGuard: Mesh VPN Comparison and Decision Guide",
    source: "WZ-IT",
    date: "2026-10-12",
    url: "https://wz-it.com/en/knowledge/remote-access/netbird-vs-tailscale-vs-wireguard/",
    summary: "WireGuard utilisé seul ne fait que chiffrer la connexion : il faut ajouter et retirer chaque appareil à la main. Des outils construits sur WireGuard, comme Tailscale ou NetBird, ajoutent ce qui manque en entreprise : la gestion des clés, la connexion avec le compte de l’entreprise et les règles d’accès.",
    veille: "2026-10-19"
  },
  {
    id: "article5",
    title: "OpenVPN 2.7.8 Released with Certificate and Windows Security Fixes",
    source: "Linuxiac",
    date: "2026-10-07",
    url: "https://linuxiac.com/openvpn-2-7-8-released-with-certificate-and-windows-security-fixes/",
    summary: "OpenVPN corrige trois failles de sécurité, dont une dans la vérification des certificats, qui servent de « carte d’identité » au serveur et aux clients.",
    veille: "2026-10-19"
  },

  // Veille du 2 novembre 2026
  {
    id: "article4",
    title: "Surfshark claims a major first by bringing full post-quantum security to WireGuard",
    source: "TechRadar",
    date: "2026-10-07",
    url: "https://www.techradar.com/vpn/vpn-services/surfshark-claims-a-major-first-by-bringing-full-post-quantum-security-to-wireguard",
    summary: "Le fournisseur de VPN Surfshark a modifié sa version de WireGuard pour la protéger contre les futurs ordinateurs quantiques, qui pourraient retrouver la clé de session.",
    veille: "2026-11-02"
  },
  {
    id: "article6",
    title: "Known Limitations",
    source: "WireGuard (site officiel, page non datée)",
    date: "2026-10-29",
    url: "https://www.wireguard.com/known-limitations/",
    summary: "Le site officiel de WireGuard reconnaît que le protocole n’est pas protégé par défaut contre les futurs ordinateurs quantiques. Il conseille d’utiliser la clé pré-partagée comme protection supplémentaire, idéalement en la créant grâce à un échange de clés post-quantique réalisé à part, puis en l’insérant dans WireGuard. La page présente aussi les autres limites assumées du protocole.",
    veille: "2026-11-02"
  },
  {
    id: "article8",
    title: "Post-quantum cryptography security in OpenVPN",
    source: "OpenVPN (documentation officielle)",
    date: "2025-06-11",
    url: "https://community.openvpn.net/PQCryptoOpenVPN",
    summary: "La documentation officielle d’OpenVPN explique que le chiffrement des données reste sûr face aux ordinateurs quantiques, contrairement à l’échange de clés. OpenVPN peut utiliser un échange de clés post-quantique lorsqu’il fonctionne avec une bibliothèque OpenSSL récente (version 3.5 ou plus). Ses clés pré-partagées (option tls-crypt) apportent aussi une protection partielle.",
    veille: "2026-11-02"
  },
  {
    id: "article9",
    title: "Post-quantum encryption for Cloudflare IPsec is generally available",
    source: "Cloudflare",
    date: "2026-04-30",
    url: "https://blog.cloudflare.com/post-quantum-ipsec",
    summary: "Cloudflare propose désormais un échange de clés post-quantique pour ses tunnels IPsec, en suivant un standard en cours de finalisation. Il fonctionne avec des équipements existants, comme ceux de Cisco et Fortinet. En revanche, la vérification de l’identité des équipements n’a pas encore de version post-quantique standardisée.",
    veille: "2026-11-02"
  },
  {
    id: "article11",
    title: "Tailscale fixes SSH flaws allowing lateral movement within tailnets",
    source: "Help Net Security",
    date: "2026-10-28",
    url: "https://www.helpnetsecurity.com/2026/10/28/tailscale-fixes-tailworm-ssh-flaws/",
    summary: "Tailscale, un outil d’entreprise construit sur WireGuard, a corrigé plusieurs failles, surtout dans sa fonction SSH, qui permet de prendre la main à distance sur les machines du réseau. Un pirate qui contrôlait déjà un appareil pouvait obtenir les droits administrateur sur d’autres machines parmi celles qu’il avait le droit de joindre, et même ajouter un faux appareil au réseau. Tailscale conseille de faire la mise à jour et de limiter les accès SSH au strict nécessaire.",
    veille: "2026-11-02"
  },
]