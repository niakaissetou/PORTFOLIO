import type { Skill } from "../types/Skills"

export const skills: Skill[] = [
  {
    id: "langages-web",
    label: "Langages & web",
    technologies: [
      { name: "C", icons: ["src/assets/icons/c-1.svg"] },
      { name: "HTML/CSS", icons: ["src/assets/icons/html-1.svg", "src/assets/icons/css-3.svg"] },
      { name: "JavaScript", icons: ["src/assets/icons/javascript-1.svg"] },
      { name: "ASM" },
      { name: "PHP", icons: ["src/assets/icons/php-6.svg"] },
      { name: "Python", icons: ["src/assets/icons/python-5.svg"] },
    ]
  },
  {
    id: "systemes",
    label: "Systèmes d'exploitation",
    technologies: [
      { name: "Debian", icons: ["src/assets/icons/debian-2.svg"] },
      { name: "Fedora", icons: ["src/assets/icons/fedora-1.svg"] },
      { name: "Ubuntu", icons: ["src/assets/icons/ubuntu-4.svg"] },
      { name: "Windows/Windows server", icons: ["src/assets/icons/microsoft-windows-22.svg", "src/assets/icons/windows-server-2.svg"] },
    ]
  },
  {
    id: "virtualisation-dev",
    label: "Virtualisation & développement",
    technologies: [
      { name: "Proxmox", icons: ["src/assets/icons/proxmox-2.svg"] },
      { name: "GitHub", icons: ["src/assets/icons/github-icon-1.svg"] },
      { name: "VS Code", icons: ["src/assets/icons/visual-studio-code-1.svg"] },
      { name: "VmWare", icons: ["src/assets/icons/vmware.svg"] },
    ]
  },
  {
    id: "collaboration",
    label: "Gestion de projet & collaboration",
    technologies: [
      { name: "Jira", icons: ["src/assets/icons/jira-3.svg"] },
      { name: "Slack", icons: ["src/assets/icons/slack-new-logo.svg"] },
      { name: "Trello", icons: ["src/assets/icons/trello.svg"] },
    ]
  }
]