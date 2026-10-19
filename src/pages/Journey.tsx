import ExperienceCard from '../components/ExpCard.tsx'
import { exps } from '../data/exp.ts'

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="currentColor">
      <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3z" />
      <path d="M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8z" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="currentColor" fillRule="evenodd">
      <path d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v4H2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm0 2v2h6V5H9z" />
      <path d="M2 14h8v1a2 2 0 0 0 4 0v-1h8v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z" />
    </svg>
  )
}

const formations = exps.filter((e) => e.type === 'formation')
const jobs = exps.filter((e) => e.type !== 'formation')

function Journey() {
  return (
    <div className="page">
      <h1>Mon parcours</h1>
      <p className="page-intro">Mes formations et mes expériences, de la plus récente à la plus ancienne.</p>

      <section className="journey-group">
        <h2 className="journey-group-title"><CapIcon /> Formation</h2>
        <div className="timeline">
          {formations.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="journey-group">
        <h2 className="journey-group-title"><BagIcon /> Expérience</h2>
        <div className="timeline">
          {jobs.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Journey