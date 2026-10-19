import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa6'

function Contacts() {
  return (
    <div className="page">
      <h1>Me contacter</h1>
      <p className="page-intro">Je recherche un stage ! N'hésitez pas à m'écrire.</p>

      <ul className="contact-grid">
        <li>
          <a href="mailto:niakateaissetou8@gmail.com" className="contact-card">
            <span className="contact-card-icon"><FaEnvelope size={22} aria-hidden="true" /></span>
            <span className="contact-card-label">E-mail</span>
            <span className="contact-card-value">niakateaissetou8@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/a%C3%AFssetou-niakat%C3%A9-lin/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon"><FaLinkedin size={22} aria-hidden="true" /></span>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">Mon profil LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/niakaissetou?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-card-icon"><FaGithub size={22} aria-hidden="true" /></span>
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">github.com/niakaissetou</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts