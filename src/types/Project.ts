export interface Project {
  
  id: string
  title: string
  summary: string
  context: string
  need?: string
  objectives: string[]
  environment: string[]
  steps: string[]
  difficulties?: string[]
  skills: string[]
  results: string[]
  proofs?: string[]
  documentation?: string
}