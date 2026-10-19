import ExperienceCard from '../components/ExpCard.tsx'
import { exps } from '../data/exp.ts'
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa6'

const formations = exps.filter((e) => e.type === 'formation')
const jobs = exps.filter((e) => e.type !== 'formation')

function Journey() {
  return (
    <div className="page">
      <h1>Mon parcours</h1>
      <p className="page-intro">Mes formations et mes expériences, de la plus récente à la plus ancienne.</p>

      <section className="journey-group">
        <h2 className="journey-group-title">
          <FaGraduationCap size={28} aria-hidden="true" /> Formation
        </h2>
        <div className="timeline">
          {formations.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <section className="journey-group">
        <h2 className="journey-group-title">
          <FaBriefcase size={28} aria-hidden="true" /> Expérience
        </h2>
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