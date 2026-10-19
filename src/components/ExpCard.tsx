import { useState } from 'react'
import type { Experience } from '../types/Exp.ts'

function ExperienceCard({ experience }: { experience: Experience }) {
  const [open, setOpen] = useState(false)
  const canExpand = experience.missions !== undefined

  return (
    <article className="experience-card">
      {experience.logo && (
        <img src={import.meta.env.BASE_URL + experience.logo} alt="" className="experience-card-logo" />
      )}
      <h3>{experience.title}</h3>
      <p className="experience-card-period">{experience.period}</p>
      <p className="experience-card-place">{experience.organization}, {experience.place}</p>

      {experience.description && (
        <p className={canExpand && !open ? "experience-card-description is-clamped" : "experience-card-description"}>
          {experience.description}
        </p>
      )}

      {open && experience.missions && (
        <ul className="experience-card-missions">
          {experience.missions.map((mission) => (
            <li key={mission}>{mission}</li>
          ))}
        </ul>
      )}

      {canExpand && (
        <div className="experience-card-footer">
          <button type="button" className="more-button" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? "Voir moins" : "En savoir plus"}
          </button>
        </div>
      )}
    </article>
  )
}

export default ExperienceCard