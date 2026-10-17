export interface Technology {
  name: string
  icon?: string
  icon2?: string
}

export interface Skill {
  id: string
  label: string
  technologies: Technology[]
}