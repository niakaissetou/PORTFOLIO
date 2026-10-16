import { useParams, Link } from 'react-router'
import { projects } from '../data/projects.ts'

function ProjectDetail() {
    
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div>
        <h1>Réalisation introuvable</h1>
        <Link to="/projets">Retour aux réalisations</Link>
      </div>
    )
  }

  return (
    <article>
      <h1>{project.title}</h1>
    </article>
  )
}

export default ProjectDetail