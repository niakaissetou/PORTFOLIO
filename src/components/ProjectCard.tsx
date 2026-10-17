import { Link } from 'react-router'
import type { Project } from '../types/Project'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to ={"/projets/" + project.id}>
      <article>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <p>Contexte : {project.context}</p>
        { project.need &&
          <p>Besoins : {project.need}</p>
        }
      </article>
    </Link>
  )
}

export default ProjectCard