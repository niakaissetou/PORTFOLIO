export interface Technology {
  name: string
  icons?: string[]
}

export interface Skill {
  id: string
  label: string
  technologies: Technology[]
}