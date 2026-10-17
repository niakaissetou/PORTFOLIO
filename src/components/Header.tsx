import { NavLink } from "react-router"

function Header() {

    return (
        <header>
            <h1>Aissetou NIAKATE</h1>
            <nav>
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/documents">Documents</NavLink>
                <NavLink to="/parcours">Parcours</NavLink>
                <NavLink to="/competences">Compétences</NavLink>
                <NavLink to="/projets">Réalisations</NavLink>
                <NavLink to="/veille-technologique">Veille</NavLink>
            </nav>
        </header>
    )
}

export default Header