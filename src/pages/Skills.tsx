import {skills } from '../data/skills.ts'

function Skills() {

    return (
        <div className="skill">
            { skills.map(skill => (
                <div key={skill.id}>
                    <h1>{skill.label}</h1>
                    <div className="technologies">
                        {skill.technologies.map((tech) => (
                            <div key={tech.name} className="technology">
                                <span>{tech.name}</span>
                                <span>
                                {tech.icon && <img src={tech.icon} alt={tech.name} />}
                                {tech.icon2 && <img src={tech.icon2} alt={tech.name} />}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skills