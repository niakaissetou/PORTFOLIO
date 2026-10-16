import './styles/Index.css'
import Contacts from './pages/Contacts.tsx'
import Documents from './pages/Documents.tsx' 
import Home from './pages/Home.tsx'
import Journey from './pages/Journey.tsx'
import Skills from './pages/Skills.tsx'
import Projects from './pages/Projetcs.tsx'
import TechWatch from './pages/TechWatch.tsx'
import NotFound from './pages/NotFound.tsx'
import { Routes, Route } from "react-router"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/parcours" element={<Journey />} />
      <Route path="/competences" element={<Skills />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/veille-technologique" element={<TechWatch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
