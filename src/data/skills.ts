import type { Skill } from "../types/Skills"

export const skills: Skill[] = [

    {
        id: "competences",
        label: "Competences",
        technologies: [
            { name: "C", icon: "src/assets/icons/c-1.svg" },
            { name: "HTML/CSS", icon: "src/assets/icons/html-1.svg", icon2:"src/assets/icons/css-3.svg" },
            { name: "JavaScript", icon: "src/assets/icons/javascript-1.svg" },
            { name: "ASM" },
            { name: "Debian", icon: "src/assets/icons/debian-2.svg" },
            { name: "Fedora", icon: "src/assets/icons/fedora-1.svg" },
            { name: "Ubuntu", icon: "src/assets/icons/ubuntu-4.svg" },
            { name: "Proxmox", icon: "src/assets/icons/proxmox-2.svg" },
            { name: "Github", icon: "src/assets/icons/github-icon-1.svg" },
            { name: "VSCode", icon: "src/assets/icons/visual-studio-code-1.svg" },
            { name: "Jira", icon: "src/assets/icons/jira-3.svg" },
            { name: "Slack", icon: "src/assets/icons/slack-new-logo.svg" },
        ]
    },
]