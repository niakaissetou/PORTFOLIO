import { Link } from 'react-router'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import photo from '../assets/photo.webp'
import { technologies } from '../data/home.ts';

function Home() {
  return (
    <>
      <section>
        <p>&gt; Portfolio · BTS SIO option SISR</p>
        <h1>Aïssetou <br></br> NIAKATE</h1>
        <p>Étudiante en 2e année de BTS SIO, spécialisée en
          administration des systèmes et des réseaux</p>
          <div className="home-page-technologies">
              {technologies.map((tech) => (
                <span key={tech.name}>{tech.name}</span>
              ))}
            </div>
        <a href={import.meta.env.BASE_URL + 'documents/cv-aissetou-niakate.pdf'} download>
        <Link to="/projets">Voir mes réalisations</Link>
          Télécharger mon CV (PDF)
        </a>
      </section>

      <section>
        <img src={photo} alt="Portrait d'Aïssetou NIAKATE" />
      </section>
    </>
  )
}

export default Home