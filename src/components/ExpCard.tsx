import type { Experience } from "../types/exp";

const typeLabels: Record<Experience['type'], string> = {

    formation: "Formation",
    stage: "Stage",
}

function ExpCard({experience}: {experience:Experience}) {

    return (

        <article>
          <h2>{experience.title}</h2>
          <p>{typeLabels[experience.type]} · {experience.period}</p>
          <p>{experience.organization}, {experience.place}</p>
          {experience.description && <p>{experience.description}</p>}
          {experience.missions && (
            <ul>
              {experience.missions.map((mission) => (
                <li key={mission}>{mission}</li>
              ))}
            </ul>
          )}
        </article>
    )
}

export default ExpCard