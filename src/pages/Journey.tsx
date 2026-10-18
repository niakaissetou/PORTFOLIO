import ExperienceCard from '../components/ExpCard.tsx'
import { exps } from '../data/exp.ts'

function Journey() {
  return (
    <>
      <h1>Mon parcours</h1>
      <p>Une phrase d'introduction écrite par toi.</p>
      {exps.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </>
  )
}

export default Journey