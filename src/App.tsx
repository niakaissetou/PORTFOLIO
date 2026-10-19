import './styles/index.css'
import './styles/pages.css'
import Contacts from './pages/Contacts.tsx'
import Document from './pages/Documents.tsx' 
import Home from './pages/Home.tsx'
import Journey from './pages/Journey.tsx'
import Skills from './pages/Skills.tsx'
import Projects from './pages/Projects.tsx'
import TechWatch from './pages/TechWatch.tsx'
import NotFound from './pages/NotFound.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Routes, Route } from "react-router"
import ProjectDetail from './pages/ProjectDetail.tsx'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/document" element={<Document />} />
        <Route path="/parcours" element={<Journey />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
        <Route path="/veille-technologique" element={<TechWatch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    <BackToTop />
    </>
  )
}

export default App
