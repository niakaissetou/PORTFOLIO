import type { Skill } from "../types/Skills"

export const skills: Skill[] = [
  {
    id: "langages-web",
    label: "Langages & web",
    technologies: [
      { name: "C", icons: ["icons/c-1.svg"] },
      { name: "HTML/CSS", icons: ["icons/html-1.svg", "icons/css-3.svg"] },
      { name: "JavaScript", icons: ["icons/javascript-1.svg"] },
      { name: "ASM" },
      { name: "PHP", icons: ["icons/php-6.svg"] },
      { name: "Python", icons: ["icons/python-5.svg"] },
    ]
  },
  {
    id: "systemes",
    label: "Systèmes d'exploitation",
    technologies: [
      { name: "Debian", icons: ["icons/debian-2.svg"] },
      { name: "Fedora", icons: ["icons/fedora-1.svg"] },
      { name: "Ubuntu", icons: ["icons/ubuntu-4.svg"] },
      { name: "Windows/Windows server", icons: ["icons/microsoft-windows-22.svg", "icons/windows-server-2.svg"] },
    ]
  },
  {
    id: "virtualisation-dev",
    label: "Virtualisation & développement",
    technologies: [
      { name: "Proxmox", icons: ["icons/proxmox-2.svg"] },
      { name: "GitHub", icons: ["icons/github-icon-1.svg"] },
      { name: "VS Code", icons: ["icons/visual-studio-code-1.svg"] },
      { name: "VmWare", icons: ["icons/vmware.svg"] },
    ]
  },
  {
    id: "collaboration",
    label: "Gestion de projet & collaboration",
    technologies: [
      { name: "Jira", icons: ["icons/jira-3.svg"] },
      { name: "Slack", icons: ["icons/slack-new-logo.svg"] },
      { name: "Trello", icons: ["icons/trello.svg"] },
    ]
  }
]