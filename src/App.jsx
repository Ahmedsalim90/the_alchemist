import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CaseStudyPage from './pages/CaseStudyPage'

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
  return (
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
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App