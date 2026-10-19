function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
    </svg>
  )
}

function Contacts() {
  return (
    <div className="page">
      <h1>Me contacter</h1>
      <p className="page-intro">Je recherche un stage ! N'hésitez pas à m'écrire.</p>

      <ul className="contact-grid">
        <li>
          <a href="mailto:niakateaissetou8@gmail.com" className="contact-card">
            <span className="contact-card-icon"><MailIcon /></span>
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
            <span className="contact-card-icon"><ProfileIcon /></span>
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
            <span className="contact-card-icon"><CodeIcon /></span>
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">github.com/niakaissetou</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts