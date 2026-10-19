import { useParams, Link } from 'react-router'
import { projects } from '../data/projects.ts'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="page not-found">
        <p className="not-found-code">404</p>
        <h1>Réalisation introuvable</h1>
        <p>Cette réalisation n'existe pas ou a été déplacée.</p>
        <Link to="/projets" className="button">Retour aux réalisations</Link>
      </div>
    )
  }

  return (
    <article className="page project-detail">
      <Link to="/projets" className="back-link">← Retour aux réalisations</Link>
      <h1>{project.title}</h1>
      <p className="page-intro">{project.summary}</p>

      <section>
        <h2>Contexte</h2>
        <p>{project.context}</p>
      </section>

      {project.need && (
        <section>
          <h2>Besoin</h2>
          <p>{project.need}</p>
        </section>
      )}

      <section>
        <h2>Objectifs</h2>
        <ul>
          {project.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Environnement technique</h2>
        <ul className="chips">
          {project.environment.map((env) => (
            <li key={env}>{env}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Étapes</h2>
        <ol className="steps">
          {project.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      {project.difficulties && (
        <section className="difficulties">
          <h2>Difficultés rencontrées</h2>
          <ul>
            {project.difficulties.map((difficulty) => (
              <li key={difficulty}>{difficulty}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2>Résultats</h2>
        <ul>
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Compétences mobilisées</h2>
        <ul className="chips">
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {project.documentation && (
        <section>
          <h2>Documentation</h2>
          <a href={import.meta.env.BASE_URL + project.documentation} target="_blank" className="button">
            Ouvrir la documentation (PDF)
          </a>
        </section>
      )}
    </article>
  )
}

export default ProjectDetail