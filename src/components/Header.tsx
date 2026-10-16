import { NavLink } from "react-router"

function Header() {

    return (
        <header>
            <h1>Aissetou NIAKATE</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/documents">Documents</NavLink>
                <NavLink to="/parcours">Parcours</NavLink>
                <NavLink to="/competences">Compétences</NavLink>
                <NavLink to="/projets">Projets</NavLink>
                <NavLink to="/veille-technologique">Veille technologique</NavLink>
            </nav>
        </header>
    )
}

export default Header