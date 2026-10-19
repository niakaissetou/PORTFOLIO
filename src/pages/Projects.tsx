import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <div className="page">
      <h1>Mes projets</h1>
      <p className="page-intro">Les projets menés en formation et en stage : contexte, étapes, résultats.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects