import { Link } from 'react-router'
import photo from '../assets/photo.webp'
import { technologies } from '../data/home.ts'

function Home() {
  return (
    <div className="home-page">
      <section className="home-page-text">
        <p className="turquoise">&gt; Portfolio · BTS SIO option SISR</p>
        <h1>Aïssetou <br /> NIAKATE</h1>
        <p className="home-page-tagline">
          Étudiante en 2e année de BTS SIO, spécialisée en administration des systèmes et des réseaux
        </p>
        <div className="home-page-technologies">
          {technologies.map((tech) => (
            <span key={tech.name}>{tech.name}</span>
          ))}
        </div>
        <div className="home-page-actions">
          <Link to="/projets" className="home-page-button">
            Voir mes réalisations
          </Link>
          <a
            href={import.meta.env.BASE_URL + 'documents/cv-aissetou-niakate.pdf'}
            download
            className="home-page-button home-page-button-outline"
          >
            Télécharger mon CV (PDF)
          </a>
        </div>
      </section>

      <section className="home-page-photo">
        <img src={photo} alt="Portrait d'Aïssetou NIAKATE" />
      </section>
    </div>
  )
}

export default Home