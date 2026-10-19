export interface Synthese {
  appris: string;
  change: string;
  aSurveiller: string[];
  lienSISR: string;
}

export const syntheses: Record<string, Synthese> = {
  '2026-10-05': {
    appris: "La coupure du câble sous-marin des Tonga après l’éruption volcanique de janvier 2022 a fortement perturbé l’accès à Internet. Les satellites ont permis de rétablir certaines communications en attendant la réparation du câble. L’incident en mer Baltique montre également que les câbles peuvent être endommagés par des activités humaines.",

    change: "Les risques liés aux câbles sous-marins renforcent l’intérêt des solutions de secours, notamment les communications satellitaires, pour maintenir une connexion en cas de coupure.",

    aSurveiller: [
      "Les nouvelles coupures de câbles sous-marins",
      "Les tensions géopolitiques en mer Baltique",
      "Les délais de réparation des câbles",
      "La disponibilité et les performances des connexions satellitaires",
    ],

    lienSISR: "Cette veille illustre l’importance de la redondance réseau. Comme dans une entreprise, une liaison de secours permet de maintenir les services essentiels lorsqu’une connexion principale tombe en panne.",
  },

  '2026-10-19': {
    appris: "Les câbles sous-marins transportent la majorité du trafic Internet international. Les satellites peuvent servir de liaison de secours en cas de coupure, notamment pour les zones isolées et les services essentiels.",

    change: "Les solutions de redondance évoluent vers des réseaux hybrides combinant fibre optique, satellites et autres liaisons alternatives pour améliorer la continuité de service.",

    aSurveiller: [
      "Les coupures de câbles sous-marins",
      "Les tensions géopolitiques",
      "La capacité des satellites à absorber le trafic",
      "Le coût de ces solutions de secours",
    ],

    lienSISR: "Cette veille montre l’importance de la redondance des liaisons et du basculement automatique (failover) pour maintenir la disponibilité du réseau en cas de panne.",
  },

  '2026-11-02': {
    appris: "À compléter",
    change: "À compléter",
    aSurveiller: [],
    lienSISR: "À compléter",
  },
};