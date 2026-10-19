import type { Experience } from "../types/Exp.ts";

export const exps: Experience[] = [

    {
        id: "bts",
        type: "formation",
        title: "BTS SIO option SISR",
        organization: "Lycée Charles-de-Foucauld",
        place: "Paris",
        period: "2025 - 2027",
        description: "Administration des systèmes et des réseaux, cybersécurité, services informatiques aux organisations",
        logo: "./logos/logo-lycee.webp"
    },
    {
        id: "PGE",
        type: "formation",
        title: "Programme Grande École",
        organization: "EPITECH",
        place: "Kremlin-Bicêtre",
        period: "2022 - 2024",
        description: "Formation aux technologies de l'information, pédagogie par projets, développement logiciel",
        logo: "./logos/epitech.webp"
    },
    {
        id: "stage1",
        type: "stage",
        title: "Stage - Technicienne informatique",
        organization: "Hôpital Diaconesses Croix Saint-Simon",
        place: "Paris",
        period: "Mai 2026 – Juin 2026",
        missions: ["Déploiement d'une dizaine de postes de travail : installation, configuration et mise en service ",
                "Support utilisateurs et dépannage matériel en environnement hospitalier ",
                "Participation à la gestion du parc informatique avec GLPI "],
        logo: "./logos/gh.webp"
    },
    {
        id: "stage2",
        type: "stage",
        title: "Stage - Testeuse d'application",
        organization: "ShoopCity",
        place: "Télé-travail",
        period: "Octobre 2023 – Décembre 20236",
        missions: ["Tests des nouvelles fonctionnalités avant mise en ligne et remontée des anomalies aux développeurs ",
                "Propositions d'amélioration de l'expérience utilisateur ",
                "Coordination entre les équipes développement et marketing/communication "],
        logo: "./logos/shoopcity.webp"
    },
]