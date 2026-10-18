import type { Experience } from "../types/exp";

export const exps: Experience[] = [

    {
        id: "bts",
        type: "formation",
        title: "BTS SIO option SISR",
        organization: "Lycée Charles-de-Foucauld",
        place: "Paris",
        period: "2025 - 2027",
        description: "Administration des systèmes et des réseaux, cybersécurité, services informatiques aux organisations"
    },
    {
        id: "stage1",
        type: "stage",
        title: "Stage - Technicienne informatique",
        organization: "Hôpital Diaconesses Croix Saint-Simon",
        place: "Paris",
        period: "Mai 2026 – Juin 2026",
        missions: ["• Déploiement d'une dizaine de postes de travail : installation, configuration et mise en service ",
                "• Support utilisateurs et dépannage matériel en environnement hospitalier ",
                "• Participation à la gestion du parc informatique avec GLPI "]
    },
    {
        id: "stage2",
        type: "stage",
        title: "Stage - Testeuse d'application",
        organization: "ShoopCity",
        place: "Télé-travail",
        period: "Octobre 2023 – Décembre 20236",
        missions: ["• Tests des nouvelles fonctionnalités avant mise en ligne et remontée des anomalies aux développeurs ",
                "• Propositions d'amélioration de l'expérience utilisateur ",
                "• Coordination entre les équipes développement et marketing/communication "]
    },
]