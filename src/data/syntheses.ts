export interface Synthese {
  appris: string;
  change: string;
  aSurveiller: string[];
}

export const syntheses: Record<string, Synthese> = {
  '2026-10-05': {//veille n°1
    appris: "Aucun protocole n’est meilleur partout. Le bon choix dépend du réseau, avec ses pare-feu, et des besoins de l’entreprise, comme la gestion des utilisateurs. WireGuard est le plus simple et le plus rapide. OpenVPN passe plus facilement les pare-feu et gère les comptes des salariés. IPsec, lui, est intégré aux systèmes, mais peut être bloqué.",

    change: "Pour choisir un VPN, il ne suffit pas de regarder le chiffrement : il faut aussi penser aux pare-feu, à la simplicité et à la sécurité du code. Un VPN est exposé sur Internet : la moindre erreur dans son programme ou dans sa configuration peut ouvrir une porte aux attaquants. WireGuard compte environ 4 000 lignes de code, contre plusieurs dizaines de milliers pour OpenVPN et des centaines de milliers pour IPsec. Moins de code, c’est moins d’endroits où une faille peut se cacher, et moins d’options, c’est moins d’erreurs de configuration. strongSwan, un logiciel IPsec, vient par exemple de corriger onze failles.",
    
    aSurveiller: [
      "Les failles de WireGuard, OpenVPN et IPsec",
      "La gestion des utilisateurs avec WireGuard en entreprise",
      "Les performances de WireGuard face à OpenVPN et IPsec",
    ],
  },

  '2026-10-19': { //veille n°2
    appris: "WireGuard reconnaît les appareils, mais pas les personnes : chaque appareil a sa paire de clés, sans identifiant ni mot de passe. Contrairement à OpenVPN et IPsec, il ne gère donc pas les comptes des salariés. En entreprise, il faut lui ajouter un outil comme Tailscale ou NetBird, qui gère les clés, la connexion avec le compte de l’entreprise et les règles d’accès. De son côté, OpenVPN a corrigé trois failles, dont une dans la vérification des certificats qui aurait pu permettre à un pirate de se faire passer pour quelqu’un d’autre.",

    change: "WireGuard est une vraie alternative à OpenVPN et IPsec, mais pas une solution complète à lui seul : en entreprise, il doit être complété par un outil de gestion des utilisateurs. Le code plus complexe d’OpenVPN et d’IPsec demande des correctifs réguliers.",

    aSurveiller: [
      "Les failles éventuelles des outils construits sur WireGuard (Tailscale, NetBird)",
      "La connexion au VPN avec le compte de l’entreprise",
    ],
  },

  '2026-11-02': { //veille n°3
    appris: "L’annonce de Surfshark m’a fait découvrir un nouvel enjeu de sécurité : le post-quantique. OpenVPN et IPsec proposent déjà un échange de clés post-quantique. La version officielle de WireGuard permet seulement d’ajouter une clé pré-partagée : comme elle est copiée à la main sur les appareils, elle n’apparaît jamais dans les données copiées par un pirate, et un ordinateur quantique ne peut donc pas la retrouver. Il faut cependant la gérer appareil par appareil. Pour aller plus loin, certains fournisseurs, comme Surfshark, modifient leur propre version de WireGuard. Enfin, Tailscale, l’un des outils ajoutés autour de WireGuard en entreprise, a corrigé des failles dans sa fonction SSH : un pirate qui contrôlait déjà un appareil pouvait prendre la main sur d’autres machines, parmi celles qu’il avait le droit de joindre. Ce n’est pas WireGuard qui était en cause, mais l’outil ajouté autour.",

    change: "Sur le critère de la sécurité, WireGuard n’est pas en avance sur tout. Il utilise toujours les mêmes algorithmes, sans possibilité d’en choisir d’autres : c’est ce qui le rend simple, mais aussi ce qui le met en retard face au post-quantique. C’est un critère secondaire aujourd’hui, mais important pour une entreprise dont les données doivent rester secrètes longtemps. Enfin, sa simplicité protège le tunnel, pas tout ce qu’on installe autour.",

    aSurveiller: [
      "L’arrivée d’une protection post-quantique dans la version officielle de WireGuard, qui réduirait son retard sur OpenVPN et IPsec",
      "La sécurité des outils construits sur WireGuard (Tailscale, NetBird), indispensables en entreprise",
    ],
  },
};