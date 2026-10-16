import { Link } from 'react-router'
import type { Project } from '../types/Project'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to ={"/projets/" + project.id}>
      <article>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <p>Contexte : {project.context}</p>
        <p>Besoins : {project.need}</p>
        <p>Objectifs : {project.objectives.join(', ')}</p>
        <p>Environnement : {project.environment.join(', ')}</p>
        <p>Étapes : {project.steps.join(', ')}</p>
        <p>Difficultés : {project.difficulties?.join(', ')}</p>
        <p>Preuves : {project.proofs?.join(', ')}</p>
        <p>Compétences : {project.skills.join(', ')}</p>
        <p>Résultats : {project.results.join(', ')}</p>
      </article>
    </Link>
  )
}

export default ProjectCard