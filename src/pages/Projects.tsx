import ProjectCard from '../components/ProjectCard.tsx'
import { projects } from "../data/projects.ts"

function Projects() {

    return (
        <div className="projects">
            <h1>Mes projets</h1>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} /> //Pour chaque fiche de la liste, il fabrique une carte, étiquetée avec l’id de la fiche, et lui donne cette mêmefiche à afficher
            ))}
        </div>
    )
}

export default Projects