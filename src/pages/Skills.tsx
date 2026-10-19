import { skills } from '../data/skills'

function Skills() {
  return (
    <div className="page">
      <h1>Compétences</h1>
      <p className="page-intro">Les langages, systèmes et outils que j'utilise en formation et en stage.</p>

      <div className="skills-categories">
        {skills.map((skill) => (
          <section key={skill.id} className="skills-category">
            <div className="skills-category-header">
              <h2>{skill.label}</h2>
              <span className="skills-category-count">{skill.technologies.length} outils</span>
            </div>
            <ul className="technologies">
              {skill.technologies.map((tech) => (
                <li key={tech.name} className="technology">
                  {tech.icons?.map((icon) => (
                    <img key={icon} src={import.meta.env.BASE_URL + icon} alt="" />
                  ))}
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Skills