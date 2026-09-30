import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ParticleField from './components/layout/ParticleField'
import FloatingWhatsApp from './components/contact/FloatingWhatsApp'
import CaseStudyPage from './pages/CaseStudyPage'
import usePageTitle from './hooks/usePageTitle'

import Hero from './sections/Hero'
import SelectedWork from './sections/SelectedWork'
import AlchemistMethod from './sections/AlchemistMethod'
import DesignEngineering from './sections/DesignEngineering'
import Toolbox from './sections/Toolbox'
import About from './sections/About'
import Lab from './sections/Lab'
import Collaboration from './sections/Collaboration'
import GithubCode from './sections/GithubCode'
import Contact from './sections/Contact'

function HomePage() {
  usePageTitle(
    'THE ALCHEMIST — Nsangou Ahmed Salim',
    'Full-Stack & Mobile Developer. Designer · Developer · Problem Solver. I turn real-world problems into software.'
  )

  return (
    <>
      <main>
        <Hero />
        <SelectedWork />
        <AlchemistMethod />
        <DesignEngineering />
        <Toolbox />
        <About />
        <Lab />
        <Collaboration />
        <GithubCode />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </>
  )
}

function App() {
  return (
    <div className="page-shell">
      <ParticleField />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
