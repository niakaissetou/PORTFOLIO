import { Link } from 'react-router'
import type { Project } from '../types/Project'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={"/projets/" + project.id} className="project-card">
      <article>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <p className="project-card-detail"><span>Contexte</span>{project.context}</p>
        {project.need && <p className="project-card-detail"><span>Besoin</span>{project.need}</p>}
      </article>
    </Link>
  )
}

export default ProjectCard