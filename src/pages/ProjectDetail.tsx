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
      <section>
        <h2>Objectifs</h2>
        <ul>
            { project.objectives.map((objective) => (
              <li key={ objective}>{ objective }</li>
            )) }
        </ul>
      </section>

      <section>
        <h2>Environnement</h2>
        <ul>
          { project.environment.map((env) => (
            <li key={ env}>{ env }</li>
          )) }
        </ul>
      </section>

      <section>
        <h2>Étapes</h2>
        <ol>
          { project.steps.map((step) => (
            <li key={ step }>{ step }</li>
          )) }
        </ol>
      </section>

      <section>
        <h2>Compétences</h2>
        <ul>
          { project.skills.map((skill) => (
            <li key={ skill}>{ skill }</li>
          )) }
        </ul>
      </section>

      <section>
        <h2>Résultats</h2>
        <ul>
          { project.results.map((result) => (
            <li key={ result}>{ result }</li>
          )) }
        </ul>
      </section>

      { project.difficulties &&
        <section>
          <h2>Difficultés</h2>
            <ul>
              { project.difficulties?.map((difficulty) => (
                <li key={ difficulty}>{ difficulty }</li>
              )) }
            </ul>
        </section>
      }

      { project.documentation &&
        <a href= { import.meta.env.BASE_URL + project.documentation } target="_blank">Documentation</a>
      }
    </article>
  )
}

export default ProjectDetail