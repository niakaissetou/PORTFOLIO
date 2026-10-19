import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import '../styles/header.css'

const links = [
  { to: "/", label: "Accueil" },
  { to: "/parcours", label: "Parcours" },
  { to: "/projets", label: "Réalisations" },
  { to: "/competences", label: "Compétences" },
  { to: "/veille-technologique", label: "Veille" },
  { to: "/document", label: "Tableau de synthèse" },
  { to: "/contacts", label: "Contacts" }
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="header-bar">
        <nav className="navbar" aria-label="Navigation principale">
          <div className="logo-container">
            <Link to="/" className="logo" onClick={() => setOpen(false)}>AN</Link>
            <span className="tiret" aria-hidden="true">_</span>
          </div>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>

          <ul id="nav-links" className={open ? "nav-links open" : "nav-links"}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header